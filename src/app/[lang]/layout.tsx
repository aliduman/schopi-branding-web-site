import type {Metadata} from "next";
import "./globals.css";

import {i18n} from "../../../i18n-config";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


async function getGlobal(lang: string): Promise<any> {
}

export async function generateMetadata({params}: { params: { lang: string } }): Promise<Metadata> {
    return {
        title: "metadata.metaTitle",
        description: "metadata.metaDescription",
        icons: {},
    };
}

export default async function RootLayout({children, params,}: {
    readonly children: React.ReactNode;
    readonly params: { lang: string };
}) {
    const navbar = {
        links: [
            {id: 1, title: "Home", url: "/", newTab: false, text: "Home"},
            {id: 2, title: "About", url: "/about", newTab: false, text: "About"},
            {id: 3, title: "Contact", url: "/contact", newTab: false, text: "Contact"},
        ],
        navbarLogo: {
            logoText: "My Logo"
        }
    };

    const navbarLogoUrl = "";
    const footerLogoUrl = "";
    const notificationBanner = {
        heading: "Latest News",
        text: "Check out our latest updates",
        type: "info",
        show: true,
        link: {
            id: 1,
            url: "/blog",
            newTab: false,
            text: "Read the latest blog post",
        },
    };

    interface CategoryLink {
        id: string;
        attributes: {
            name: string;
            slug: string;
        };
    }
    const footer = {
        footerLogo: {
            logoText: "My Logo"
        },
        menuLinks: [
            {id: 1, title: "Home", url: "/", newTab: false, text: "Home"},
            {id: 2, title: "About", url: "/about", newTab: false, text: "About"},
            {id: 3, title: "Contact", url: "/contact", newTab: false, text: "Contact"},
        ],
        legalLinks: [
            {id: 1, title: "Privacy Policy", url: "/privacy-policy", newTab: false, text: "Privacy Policy"},
            {id: 2, title: "Terms of Service", url: "/terms-of-service", newTab: false, text: "Terms of Service"},
        ],
        socialLinks: [
            {id: 1, title: "Facebook", url: "https://facebook.com", newTab: true, text: "Facebook"},
            {id: 2, title: "Twitter", url: "https://twitter.com", newTab: true, text: "Twitter"},
            {id: 3, title: "Instagram", url: "https://instagram.com", newTab: true, text: "Instagram"},
        ],
        categories: {
            data: [
                {id: "1", attributes: {name: "Category 1", slug: "category-1"}},
                {id: "2", attributes: {name: "Category 2", slug: "category-2"}},
                {id: "3", attributes: {name: "Category 3", slug: "category-3"}}
            ],
        },
    };


    return (
        <html lang={params.lang}>
        <body>
        <Navbar
            links={navbar.links}
            logoUrl={navbarLogoUrl}
            logoText={navbar.navbarLogo.logoText}></Navbar>

        <main className="dark:bg-black dark:text-gray-100 min-h-screen">
            {children}
        </main>

        <Banner data={notificationBanner}/>

        <Footer
            logoUrl={footerLogoUrl}
            logoText={footer.footerLogo.logoText}
            menuLinks={footer.menuLinks}
            categoryLinks={footer.categories.data}
            legalLinks={footer.legalLinks}
            socialLinks={footer.socialLinks}
        />
        </body>
        </html>
    );
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({lang: locale}));
}
