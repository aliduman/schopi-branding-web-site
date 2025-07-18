"use client";
import Link from "next/link";
import React from "react";
import Container from "../components/Container";
import { useParams } from 'next/navigation';
import { getDictionary } from './../dictionaries'
import Dictionary from "@/app/[lang]/dictionary";

interface FooterProps {
    dict: Dictionary;
    lang: string;
}
export default function Footer(props: FooterProps) {
    try {
        const navigation = [
            {
                name: props.dict.footer.menu.product,
                href: props.lang+"/",
            },
            {
                name: props.dict.footer.menu.features,
                href: props.lang+"#features",
            },
            {
                name: props.dict.footer.menu.pricing,
                href: props.lang+"#pricing",
            },
            {
                name: props.dict.footer.menu.faq,
                href: props.lang+"#faq",
            },
        ];
        const legal = [
            {
                name: props.dict.footer.menu.privacyPolicy,
                href: "/"+props.lang+"/privacy",
            },
            {
                name: props.dict.footer.menu.termsOfService,
                href: "/"+props.lang+"/terms",
            },
            {
                name: props.dict.footer.menu.cookiePolicy,
                href: "/"+props.lang+"/cookie-policy",
            }
        ];
        return (
            <div className="relative">
                <Container>
                    <div
                        className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
                        <div className="lg:col-span-2">
                            <div>
                                <Link
                                    href="/"
                                    className="flex items-center space-x-2 text-2xl font-medium text-schopiColor-primary dark:text-gray-100"
                                >
                                    <SchopiLogo/>
                                </Link>
                            </div>

                            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
                                <p>
                                    {props.dict.footer.description}
                                </p>
                            </div>

                            <div className="mt-5"></div>
                        </div>

                        <div>
                            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
                                {navigation.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-schopiColor-primary focus:text-schopiColor-primary focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
                                {legal.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-schopiColor-primary focus:text-schopiColor-primary focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="">
                            <div>{props.dict.footer.followUs}</div>
                            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
                                <a
                                    href="https://twitter.com/schopi"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <span className="sr-only">Twitter</span>
                                    <Twitter/>
                                </a>
                                <a
                                    href="https://facebook.com/schopi"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <span className="sr-only">Facebook</span>
                                    <Facebook/>
                                </a>
                                <a
                                    href="https://instagram.com/schopi"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <Instagram/>
                                </a>
                                <a href="https://linkedin.com/schopi" target="_blank" rel="noopener">
                                    <span className="sr-only">Linkedin</span>
                                    <Linkedin/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
                        Copyright © {new Date().getFullYear()}. All rights reserved.
                    </div>
                </Container>
            </div>
        );
    } catch (e) {
        console.error(e);
    }
}

const Twitter = ({size = 24}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path
            d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z"/>
    </svg>
);

const Facebook = ({size = 24}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path
            d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/>
    </svg>
);
const Instagram = ({size = 24}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path
            d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/>
    </svg>
);

const Linkedin = ({size = 24}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path
            d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/>
    </svg>
);

function SchopiLogo() {
    return (
        <svg width="232" height="45" viewBox="0 0 232 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.4778 36.216C9.60578 36.216 7.80578 35.916 6.07778 35.316C4.37378 34.716 3.05378 33.924 2.11778 32.94L3.16178 30.888C4.07378 31.8 5.28578 32.544 6.79778 33.12C8.30978 33.672 9.86978 33.948 11.4778 33.948C13.7338 33.948 15.4258 33.54 16.5538 32.724C17.6818 31.884 18.2458 30.804 18.2458 29.484C18.2458 28.476 17.9338 27.672 17.3098 27.072C16.7098 26.472 15.9658 26.016 15.0778 25.704C14.1898 25.368 12.9538 25.008 11.3698 24.624C9.47378 24.144 7.96178 23.688 6.83378 23.256C5.70578 22.8 4.73378 22.116 3.91778 21.204C3.12578 20.292 2.72978 19.056 2.72978 17.496C2.72978 16.224 3.06578 15.072 3.73778 14.04C4.40978 12.984 5.44178 12.144 6.83378 11.52C8.22578 10.896 9.95378 10.584 12.0178 10.584C13.4578 10.584 14.8618 10.788 16.2298 11.196C17.6218 11.58 18.8218 12.12 19.8298 12.816L18.9298 14.94C17.8738 14.244 16.7458 13.728 15.5458 13.392C14.3458 13.032 13.1698 12.852 12.0178 12.852C9.80978 12.852 8.14178 13.284 7.01378 14.148C5.90978 14.988 5.35778 16.08 5.35778 17.424C5.35778 18.432 5.65778 19.248 6.25778 19.872C6.88178 20.472 7.64978 20.94 8.56178 21.276C9.49778 21.588 10.7458 21.936 12.3058 22.32C14.1538 22.776 15.6418 23.232 16.7698 23.688C17.9218 24.12 18.8938 24.792 19.6858 25.704C20.4778 26.592 20.8738 27.804 20.8738 29.34C20.8738 30.612 20.5258 31.776 19.8298 32.832C19.1578 33.864 18.1138 34.692 16.6978 35.316C15.2818 35.916 13.5418 36.216 11.4778 36.216Z"
                fill="#626263"/>
            <path
                d="M55.1105 35.216C52.6145 35.216 50.3585 34.664 48.3425 33.56C46.3505 32.456 44.7785 30.932 43.6265 28.988C42.4985 27.02 41.9345 24.824 41.9345 22.4C41.9345 19.976 42.4985 17.792 43.6265 15.848C44.7785 13.88 46.3625 12.344 48.3785 11.24C50.3945 10.136 52.6505 9.584 55.1465 9.584C57.0185 9.584 58.7465 9.896 60.3305 10.52C61.9145 11.144 63.2585 12.056 64.3625 13.256L62.6705 14.948C60.7025 12.956 58.2185 11.96 55.2185 11.96C53.2265 11.96 51.4145 12.416 49.7825 13.328C48.1505 14.24 46.8665 15.488 45.9305 17.072C45.0185 18.656 44.5625 20.432 44.5625 22.4C44.5625 24.368 45.0185 26.144 45.9305 27.728C46.8665 29.312 48.1505 30.56 49.7825 31.472C51.4145 32.384 53.2265 32.84 55.2185 32.84C58.2425 32.84 60.7265 31.832 62.6705 29.816L64.3625 31.508C63.2585 32.708 61.9025 33.632 60.2945 34.28C58.7105 34.904 56.9825 35.216 55.1105 35.216Z"
                fill="#626263"/>
            <path d="M108.521 10.8V36H105.893V24.372H90.1254V36H87.4614V10.8H90.1254V22.032H105.893V10.8H108.521Z"
                  fill="#626263"/>
            <path
                d="M145.52 36.216C143.024 36.216 140.756 35.664 138.716 34.56C136.7 33.432 135.116 31.896 133.964 29.952C132.836 28.008 132.272 25.824 132.272 23.4C132.272 20.976 132.836 18.792 133.964 16.848C135.116 14.904 136.7 13.38 138.716 12.276C140.756 11.148 143.024 10.584 145.52 10.584C148.016 10.584 150.26 11.136 152.252 12.24C154.268 13.344 155.852 14.88 157.004 16.848C158.156 18.792 158.732 20.976 158.732 23.4C158.732 25.824 158.156 28.02 157.004 29.988C155.852 31.932 154.268 33.456 152.252 34.56C150.26 35.664 148.016 36.216 145.52 36.216ZM145.52 33.84C147.512 33.84 149.312 33.396 150.92 32.508C152.528 31.596 153.788 30.348 154.7 28.764C155.612 27.156 156.068 25.368 156.068 23.4C156.068 21.432 155.612 19.656 154.7 18.072C153.788 16.464 152.528 15.216 150.92 14.328C149.312 13.416 147.512 12.96 145.52 12.96C143.528 12.96 141.716 13.416 140.084 14.328C138.476 15.216 137.204 16.464 136.268 18.072C135.356 19.656 134.9 21.432 134.9 23.4C134.9 25.368 135.356 27.156 136.268 28.764C137.204 30.348 138.476 31.596 140.084 32.508C141.716 33.396 143.528 33.84 145.52 33.84Z"
                fill="#626263"/>
            <path
                d="M191.616 10.8C194.832 10.8 197.352 11.568 199.176 13.104C201 14.64 201.912 16.752 201.912 19.44C201.912 22.128 201 24.24 199.176 25.776C197.352 27.288 194.832 28.044 191.616 28.044H184.848V36H182.184V10.8H191.616ZM191.544 25.704C194.04 25.704 195.948 25.164 197.268 24.084C198.588 22.98 199.248 21.432 199.248 19.44C199.248 17.4 198.588 15.84 197.268 14.76C195.948 13.656 194.04 13.104 191.544 13.104H184.848V25.704H191.544Z"
                fill="#626263"/>
            <path d="M225.172 9.8H227.836V35H225.172V9.8Z" fill="#626263"/>
        </svg>
    );
}
