import Image from "next/image";
import React from "react";
import Container from "../components/Container";
import Dictionary from "@/app/[lang]/dictionary";

interface PricingProps {
    dict: Dictionary;
    id: string;
}
export default function Pricing(props: Readonly<PricingProps>) {
    return (
        <Container className="pt-16" id={props.id} style={{'paddingTop': 175}}>
            <div className="max-w-screen-xl py-10 mx-auto mt-auto">
                <div className="text-center">
                    <h1 className="my-3 text-3xl font-bold tracking-tight text-gray-800 md:text-5xl dark:text-gray-100">
                        {props.dict.subscribeSection.title}
                    </h1>
                    <p className="max-w-2xl mx-auto my-2 text-lg leading-relaxed text-gray-500 md:text-xl dark:text-gray-400">
                        {props.dict.subscribeSection.description}
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row w-full gap-10 mt-12 place-items-center">
                    <div
                        className="flex max-w-md flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 p-8 rounded-md">
                        <div className="text-center">
                            <h4 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                                {props.dict.subscribeSection.package1.title}
                            </h4>
                            <h3 className="text-xs text-gray-300">
                                {props.dict.subscribeSection.package1.subtitle}
                            </h3>
                            <p className="mt-3 text-4xl font-extrabold md:text-5xl dark:text-white">
                                {props.dict.subscribeSection.package1.discountPrice}
                            </p>
                            <p className="mt-1 text-xl font-medium text-gray-400 line-through md:text-2xl">
                                {props.dict.subscribeSection.package1.realPrice}
                            </p>
                        </div>
                        <ul className="grid max-w-sm mt-8 text-left gap-y-4">
                            {/*features loop*/}
                            {props.dict.subscribeSection.package1.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-800 dark:text-gray-100">
                                    <CheckIcon/>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-auto">
                            <button
                                className="flex items-center justify-center w-full gap-3 px-10 py-4 mx-auto mt-10 font-medium text-schopiColor-primary transition-colors border-2 border-schopiColor-primary rounded-full hover:bg-schopiColor-primary hover:text-white">
                                <span>
                                    {props.dict.subscribeSection.package1.comingSoonButtonText}
                                </span>
                            </button>
                        </div>
                    </div>
                    <div
                        className="flex max-w-md flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 p-8 rounded-md relative">
                        <span
                            className="absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white bg-schopiColor-primary rounded-bl-md">
                            {props.dict.subscribeSection.package2.bestChoiceLabel}
                        </span>
                        <div className="text-center">
                            <h4 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                                {props.dict.subscribeSection.package2.title}
                            </h4>
                            <h3 className="text-xs text-gray-300">
                                {props.dict.subscribeSection.package2.subtitle}
                            </h3>
                            <p className="mt-3 text-4xl font-extrabold text-schopiColor-primary md:text-5xl">
                                {props.dict.subscribeSection.package2.discountPrice}
                            </p>
                            <p className="mt-1 text-xl font-medium text-gray-400 line-through md:text-2xl">
                                {props.dict.subscribeSection.package2.realPrice}
                            </p>
                        </div>
                        <ul className="grid max-w-sm mt-8 text-left gap-y-4">
                            {props.dict.subscribeSection.package1.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-800 dark:text-gray-100">
                                    <CheckIcon/>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="">
                            <a className="flex items-center justify-center w-full gap-3 px-5 py-4 mx-auto mt-10 font-medium text-white transition-colors bg-schopiColor-primary border border-transparent rounded-full hover:bg-schopiColor-primary"
                               href="/">
                        <span>
                            <span>
                                {props.dict.subscribeSection.package2.comingSoonButtonText}
                            </span>
                        </span>
                                <span
                                    className="px-3 py-1 ml-px text-xs font-bold rounded-full text-schopiColor-primary bg-violet-50 lg:hidden xl:inline">
                            {props.dict.subscribeSection.package2.discountLabel}
                        </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className="flex max-w-md flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 p-8 rounded-md">
                        <div className="text-center">
                            <h4 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                                {props.dict.subscribeSection.package3.title}
                            </h4>
                            <h3 className="text-xs text-gray-300">
                                {props.dict.subscribeSection.package3.subtitle}
                            </h3>
                            <p className="mt-3 text-4xl font-extrabold md:text-5xl dark:text-white">
                                {props.dict.subscribeSection.package3.discountPrice}
                            </p>
                            <p className="mt-1 text-xl font-medium text-gray-400 line-through md:text-2xl">
                                {props.dict.subscribeSection.package3.realPrice}
                            </p>
                        </div>
                        <ul className="grid max-w-sm mt-8 text-left gap-y-4">
                            {props.dict.subscribeSection.package1.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-800 dark:text-gray-100">
                                    <CheckIcon/>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-auto">
                            <button
                                className="flex items-center justify-center w-full gap-3 px-10 py-4 mx-auto mt-10 font-medium text-schopiColor-primary transition-colors border-2 border-schopiColor-primary rounded-full hover:bg-schopiColor-primary hover:text-white">
                                <span>
                                    {props.dict.subscribeSection.package3.comingSoonButtonText}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="text-center hidden">
                        <strong className="text-purple-700 animate-[pulse_1s_ease-in-out_1]">17</strong> slots
                        remaining. Use Coupon
                        <code className="px-3 py-1 text-purple-700 bg-purple-100 rounded-md">EARLYBIRD50</code>
                    </div>
                    <div
                        className="max-w-2xl p-5 mx-auto mt-10 text-sm text-center text-gray-600 border dark:text-gray-400 dark:border-gray-700 hidden">
                        <p>
                            Erken müşterimiz olduğunuz için teşekkür ederiz. Koleksiyonumuz üzerinde çalışmaya devam
                            ediyoruz bileşenler ve şablonlar. Biraz zaman alacak. Erken satın alırsanız %50 kazanırsınız
                            Orijinal fiyata indirim + ömür boyu ücretsiz gelecekteki tüm güncellemeler! Çok tatlı değil
                            mi? Bu senin için bir hediye.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

// Function icon component
function CheckIcon() {
    return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" fill="#F84B18" fillOpacity=".16"></circle>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M3.75 12a8.25 8.25 0 0 1 11.916-7.393.75.75 0 1 0 .668-1.343A9.713 9.713 0 0 0 12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c0-.366-.02-.727-.06-1.082a.75.75 0 1 0-1.49.164A8.25 8.25 0 1 1 3.75 12Zm17.78-6.47a.75.75 0 0 0-1.06-1.06L12 12.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z"
                  fill="#F84B18"></path>
        </svg>
    );
}