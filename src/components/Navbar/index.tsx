import React from "react";
import Searchbar from "./Searchbar";
import Alert from "./Alert";
import localFont from "next/font/local";
import "@/sass/navbar.scss";
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
                    <Link href={"/socials"}>
                        {" "}
                        <p>Socials</p>
                    </Link>
                    <Link href={"/help"}>
                        {" "}
                        <p>Help</p>
                    </Link>
                </div>
                <Searchbar />
                <div className="login-container">
                    <button>Login</button>
                    <span>or</span>
                    <p>Sign-up</p>
                </div>
            </div>
            <Alert />
        </>
    );
};

export default Navbar;
