import React from "react";
import styles from "../sass/styles.module.scss";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/support">Support</Link>
        </footer>
    );
};

export default Footer;
