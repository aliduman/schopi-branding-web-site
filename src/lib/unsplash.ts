type UnsplashPhoto = {
  id: string;
  urls: {
    small?: string;
  };
};

type UnsplashSearchResponse = {
  results?: UnsplashPhoto[];
};

type AvatarGender = "female" | "male";

function getGenderQuery(gender: AvatarGender) {
  if (gender === "female") {
    return "female corporate business portrait headshot professional";
  }

  return "male corporate business portrait headshot professional";
}

async function fetchAvatarSearch(
  accessKey: string,
  query: string,
  page: number,
  perPage = 30
) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&per_page=${perPage}&query=${encodeURIComponent(query)}&orientation=squarish&content_filter=high&order_by=relevant`,
    {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
        "Accept-Version": "v1",
      },
      next: { revalidate: 86400 },
    }
  );

  if (!response.ok) {
    return [] as UnsplashPhoto[];
  }

  const result = (await response.json()) as UnsplashSearchResponse;
  return result.results ?? [];
}

function toUniqueUrls(photos: UnsplashPhoto[], usedIds: Set<string>) {
  const urls: string[] = [];

  for (const photo of photos) {
    const imageUrl = photo.urls.small;
    if (!photo.id || !imageUrl || usedIds.has(photo.id)) {
      continue;
    }
    usedIds.add(photo.id);
    urls.push(imageUrl);
  }

  return urls;
}

async function buildPool(
  accessKey: string,
  gender: AvatarGender,
  needed: number,
  usedIds: Set<string>
) {
  const strictQuery = getGenderQuery(gender);
  const broadQuery =
    gender === "female"
      ? "woman professional portrait"
      : "man professional portrait";

  const pool: string[] = [];

  for (let page = 1; page <= 3 && pool.length < needed; page += 1) {
    const photos = await fetchAvatarSearch(accessKey, strictQuery, page);
    pool.push(...toUniqueUrls(photos, usedIds));
  }

  for (let page = 1; page <= 2 && pool.length < needed; page += 1) {
    const photos = await fetchAvatarSearch(accessKey, broadQuery, page);
    pool.push(...toUniqueUrls(photos, usedIds));
  }

  return pool;
}

export async function getUnsplashAvatarUrlsByGender(genders: AvatarGender[]) {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!accessKey || genders.length === 0) {
    return [] as string[];
  }

  try {
    const femaleCount = genders.filter((gender) => gender === "female").length;
    const maleCount = genders.length - femaleCount;

    const usedIds = new Set<string>();

    const [femalePool, malePool] = await Promise.all([
      buildPool(accessKey, "female", Math.max(1, femaleCount + 2), usedIds),
      buildPool(accessKey, "male", Math.max(1, maleCount + 2), usedIds),
    ]);

    return genders.map((gender) => {
      if (gender === "female") {
        return femalePool.shift() ?? malePool.shift() ?? "";
      }
      return malePool.shift() ?? femalePool.shift() ?? "";
    });
  } catch {
    return genders.map(() => "");
  }
}

