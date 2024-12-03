import Image from "next/image";
import React from "react";
import Container from "../components/Container";
import userAyseDemir from "public/img/testimonal-users/ayse-demir.png";
import userMehmetYilmaz from "public/img/testimonal-users/mehmet-yilmaz.png";
import userZeynepKaya from "public/img/testimonal-users/zeynep-kaya.png";
export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Schopi sayesinde <Mark>alışveriş listelerimi</Mark> hızlıca oluşturabiliyorum. Ekip arkadaşlarımın önerileriyle alışveriş sürecimizi mükemmel bir şekilde organize ettik.
            </p>

            <Avatar
              image={userAyseDemir}
              name="Ayşe Demir"
              title="E-Ticaret Uzmanı"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Web ve mobil uygulamaların uyumu sayesinde, <Mark>her zaman ve her yerde</Mark> listelerime erişebiliyorum. Kullanıcı deneyimi gerçekten harika!
            </p>

            <Avatar
              image={userMehmetYilmaz}
              name="Mehmet Yılmaz"
              title="Ürün Müdürü"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Schopi, ailemle <Mark>organize</Mark> olmamı sağladı. Tatil alışverişlerimizi hiç bu kadar kolay yapmamıştık. Paylaşım özelliği harika!
            </p>

            <Avatar
              image={userZeynepKaya}
              name="Zeynep Kaya"
              title="Ev Hanımı"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-schopiColor-primary bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
