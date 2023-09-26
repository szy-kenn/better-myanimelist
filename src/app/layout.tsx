import "@/sass/base/globals.scss";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], display: "swap", preload: true });

export const metadata: Metadata = {
    title: "MyBetterAnimeList",
    description: "Revamping the old-fashioned look of MyAnimeList.net",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body style={inter.style}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
