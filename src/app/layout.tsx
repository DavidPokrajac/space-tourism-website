import type { Metadata } from "next";
import localFont from "next/font/local";
import "./css/variables.css";
import "./css/reset.css";
import "./css/globals.css";

const bellefair = localFont({
    src: "./fonts/Bellefair-Regular.woff2",
    variable: "--font-bellefair-serif",
    weight: "400",
});

const barlow = localFont({
    src: "./fonts/Barlow-Regular.woff2",
    variable: "--font-barlow-sans",
    weight: "400",
});

const barlowCondensed = localFont({
    src: "./fonts/BarlowCondensed-Regular.woff2",
    variable: "--font-barlow-condensed-sans",
    weight: "400",
});

export const metadata: Metadata = {
    title: "Frontend Mentor | Space Tourism Website challenge",
    description:
        "A Frontend Mentor project, created for practising frontend skills",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
