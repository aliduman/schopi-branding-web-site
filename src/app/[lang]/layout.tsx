import type {Metadata} from "next";

import {i18n} from "../../../i18n-config";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import metadata from "../../../metadata.json";
import metaDataEn from "../../../metadata.en.json";
import {ThemeProvider} from "next-themes";
import {Inter} from "next/font/google";
import {PopupWidget} from "@/app/[lang]/components/PopupWidget";
import "./globals.css";
import {getDictionary} from "@/app/[lang]/dictionaries";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

    let metaTitle = metadata.metaTitle;
    let metaDescription = metadata.metaDescription;

    // En dictionary is used for metadata
    if (params.lang === "en") {
        metaTitle = metaDataEn.metaTitle;
        metaDescription = metaDataEn.metaDescription;
    }

    return (
        <html lang={params.lang}>
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription}/>
            <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/manifest.json"/>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
            <meta name="theme-color" content="#ffffff"/>
        </head>
        <body className={inter.className}>
        <ThemeProvider attribute="class">
            <Navbar dict={dict} lang={params.lang}></Navbar>

            <main>
                {children}
                <SpeedInsights/>
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
