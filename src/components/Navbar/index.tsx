import React from "react";
import Searchbar from "./Searchbar";
import localFont from "next/font/local";
import "@/sass/components/navbar.scss";
import Link from "next/link";

const font = localFont({ src: "../../assets/fonts/AGRevueCyr-Roman.ttf" });

const Navbar = () => {
    return (
        <>
            <div className="navbar-wrapper">
                <Link href={"/home"}>
                    <p className={`${font.className} navbar-title`}>
                        BetterMyAnimeList
                    </p>
                </Link>
                <div className="options-container">
                    <Link href={"/anime"}>
                        {" "}
                        <p>Anime</p>
                    </Link>
                    <Link href={"/manga"}>
                        {" "}
                        <p>Manga</p>
                    </Link>
                    <Link href={"/forums"}>
                        {" "}
                        <p>Forums</p>
                    </Link>
                </div>
                <Searchbar />
                <div className="login-container">
                    <p>Login</p>
                    <span>or</span>
                    <button>Sign-up</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
