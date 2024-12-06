import type {Metadata} from "next";

import {i18n} from "../../../i18n-config";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import metadata from "../../../metadata.json";
import {ThemeProvider} from "next-themes";
import {Inter} from "next/font/google";
import {PopupWidget} from "@/app/[lang]/components/PopupWidget";
import "./globals.css";
import {getDictionary} from "@/app/[lang]/dictionaries";

const inter = Inter({subsets: ["latin"]});

export async function generateMetadata({params}: { params: { lang: string } }): Promise<Metadata> {
    return {
        title: metadata.metaTitle,
        description: metadata.metaDescription,
        icons: {},
    };
}

export default async function RootLayout({children, params,}: {
    readonly children: React.ReactNode;
    readonly params: { lang: string };
}) {
    const dict = await getDictionary(params.lang);
    return (
        <html lang={params.lang}>
        <body className={inter.className}>
        <ThemeProvider attribute="class">
            <Navbar dict={dict} lang={params.lang}></Navbar>

            <main>
                {children}
            </main>

            <Footer dict={dict} lang={params.lang}/>
            {/*<PopupWidget/>*/}
        </ThemeProvider>
        </body>
        </html>
    );
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({lang: locale}));
}
