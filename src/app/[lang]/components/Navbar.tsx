"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import {Disclosure} from "@headlessui/react";
import Dictionary from "@/app/[lang]/dictionary";

interface NavbarProps {
    dict: Dictionary;
    lang: string;
}

export default function Navbar(props: NavbarProps) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const langParam = props.lang;
    const navigation = [
        {name: props.dict.header.menu.product, href: baseUrl + langParam + "#features"},
        {name: props.dict.header.menu.pricing, href: baseUrl + langParam + "#pricing"},
        {name: props.dict.header.menu.faq, href: baseUrl + langParam + "#faq"},
    ];

    return (
        <div className="w-full fixed bg-trueGray-50 dark:bg-trueGray-900 shadow-2xl z-10">
            <nav
                className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
                {/* Logo  */}
                <Link href="/">
                  <span
                      className="flex items-center space-x-2 text-2xl font-medium text-schopiColor-primary dark:text-gray-100">
                      <span>
                          <Logo/>
                      </span>
                  </span>
                </Link>

                {/* get started  */}
                <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
                    <ThemeChanger/>
                    <div className="hidden mr-3 lg:flex nav__item">
                        <Tooltip message={"Yakında"}>
                            <Link href="/"
                                  className="px-6 py-2 text-white bg-schopiColor-primary rounded-md md:ml-5 flex"
                                  data-tooltip-target="tooltip-default">
                                <span className={"mr-2"}><AppleLogo/></span> {props.dict.header.cta}
                            </Link>
                        </Tooltip>
                    </div>
                    {/*Lang Change Button*/}
                    <div className="hidden lg:flex">
                        <Link href={"/tr"}
                              className={`text-gray-500 dark:text-gray-300 hover:text-schopiColor-primary focus:text-schopiColor-primary focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700 p-2 border-2 border-schopiColor-primary mr-2 rounded ${props.lang === 'tr' ? 'bg-schopiColor-primary text-white hover:text-white' : ''}`}>
                            TR
                        </Link>
                        <Link href={"/en"}
                              className={`text-gray-500 dark:text-gray-300 hover:text-schopiColor-primary focus:text-schopiColor-primary focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700 p-2 border-2 border-schopiColor-primary rounded ${props.lang === 'en' ? 'bg-schopiColor-primary text-white hover:text-white' : ''}`}>
                            EN
                        </Link>
                    </div>
                </div>

                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button
                                aria-label="Toggle Menu"
                                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-schopiColor-primary focus:text-schopiColor-primary focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                                <svg
                                    className="w-6 h-6 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    {open && (
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                        />
                                    )}
                                    {!open && (
                                        <path
                                            fillRule="evenodd"
                                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                        />
                                    )}
                                </svg>
                            </Disclosure.Button>

                            <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                                <>
                                    {navigation.map((item, index) => (
                                        <Link key={index} href={item.href}
                                              className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-schopiColor-primary focus:text-schopiColor-primary focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                                            {item.name}
                                        </Link>
                                    ))}
                                    <Link href="/"
                                          className="w-full px-6 py-2 mt-3 text-center text-white bg-schopiColor-primary rounded-md lg:ml-5 flex items-center justify-center">
                                        <AppleLogo/>
                                        {props.dict.header.cta}
                                    </Link>

                                    {/*Language Buttons*/}
                                    <div className="w-full mt-3 flex justify-center">
                                        <Link href={"/tr"}
                                              className={'text-gray-500 dark:text-gray-300 hover:text-schopiColor-primary focus:text-schopiColor-primary focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700 p-2 border-2 border-schopiColor-primary mr-2 rounded'}>
                                            TR
                                        </Link>
                                        <Link href={"/en"}
                                              className={'text-gray-500 dark:text-gray-300 hover:text-schopiColor-primary focus:text-schopiColor-primary focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700 p-2 border-2 border-schopiColor-primary rounded'}>
                                            EN
                                        </Link>
                                    </div>
                                </>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                {/* menu  */}
                <div className="hidden text-center lg:flex lg:items-center">
                    <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                        {navigation.map((menu, index) => (
                            <li className="mr-3 nav__item" key={index}>
                                <Link href={menu.href}
                                      className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-schopiColor-primary focus:text-schopiColor-primary focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                                    {menu.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </nav>
        </div>
    );
}

function Logo() {
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

function AppleLogo() {
    return (
        <svg width={20} fill={'#fff'} viewBox="-1.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
             className={'mr-2'}>
            <defs></defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-102.000000, -7439.000000)" fill="#ffffff">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path
                            d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485"
                            id="apple-[#173]">

                        </path>
                    </g>
                </g>
            </g>
        </svg>
    )
}

function Tooltip({message, children}: { message: string, children: React.ReactNode }) {
    return (
        <div className="group relative flex">
            {children}
            <span
                className="absolute top-12 left-24 -translate-x-50 transform-gpu scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">{message}</span>
        </div>
    )
}
