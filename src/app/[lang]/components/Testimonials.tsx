import Image from "next/image";
import React from "react";
import Container from "../components/Container";
import userAyseDemir from "public/img/testimonal-users/ayse-demir.png";
import userMehmetYilmaz from "public/img/testimonal-users/mehmet-yilmaz.png";
import userZeynepKaya from "public/img/testimonal-users/zeynep-kaya.png";
import Dictionary from "@/app/[lang]/dictionary";

interface testimonailsProps {
  dict: Dictionary
}

export const Testimonials = (props: testimonailsProps) => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <div className="text-2xl leading-normal" dangerouslySetInnerHTML={{__html: props.dict.testimonalSection.testimonials.testimonial1.comment}}></div>

            <Avatar
              image={userAyseDemir}
              name={props.dict.testimonalSection.testimonials.testimonial1.name}
              title={props.dict.testimonalSection.testimonials.testimonial1.job}
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <div className="text-2xl leading-normal" dangerouslySetInnerHTML={{__html: props.dict.testimonalSection.testimonials.testimonial2.comment}}></div>

            <Avatar
              image={userMehmetYilmaz}
              name={props.dict.testimonalSection.testimonials.testimonial2.name}
              title={props.dict.testimonalSection.testimonials.testimonial2.job}
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <div className="text-2xl leading-normal" dangerouslySetInnerHTML={{__html: props.dict.testimonalSection.testimonials.testimonial3.comment}}></div>

            <Avatar
              image={userZeynepKaya}
              name={props.dict.testimonalSection.testimonials.testimonial3.name}
              title={props.dict.testimonalSection.testimonials.testimonial3.job}
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
