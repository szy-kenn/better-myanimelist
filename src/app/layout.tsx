import "@/sass/style.scss";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";

// const inter = Inter({ subsets: ["latin"], display: "swap", preload: true });

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

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
            <body style={poppins.style}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
