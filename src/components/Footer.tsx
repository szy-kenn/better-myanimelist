import React from "react";
import "@/sass/components/footer.scss";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer">
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/support">Support</Link>
        </footer>
    );
};

export default Footer;
