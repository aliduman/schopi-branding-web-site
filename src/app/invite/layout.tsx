import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../[lang]/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Schopi Daveti",
    description: "Schopi uygulamasına yönlendiriliyorsunuz",
};

export default function InviteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={inter.className} style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                margin: 0,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            }}>
                {children}
            </body>
        </html>
    );
}

