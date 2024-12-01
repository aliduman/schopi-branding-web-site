import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import benefitOneImg from "public/img/benefit-one.png";
import benefitTwoImg from "public/img/benefit-two.png";

const benefitOne = {
  title: "Schopi App size neler sunacak", // Schopi Kullanırken neler kazanacaksınız.
  desc: "Schopi, alışveriş deneyiminizi en üst seviyeye çıkaracak kullanım kolaylığını ve avantajlarını sunar. Schopi ile alışveriş yaparken kazançlı çıkacaksınız.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Daha Az Zaman, Daha Fazla Organize Olma:",
      desc: "Schopi, kullanıcı dostu tasarımıyla alışveriş sürecinizi hızlandırır.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Aile ve Arkadaşlarla Bağlantıda Kalın:",
      desc: "Listelerinizi kolayca paylaşın ve düzenlemeleri birlikte yapın.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Her Zaman ve Her Yerde:",
      desc: "İster mobil, ister web uygulaması üzerinden alışverişinizi yönetin.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
