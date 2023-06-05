import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import classes from "../../styles/Footer/Footer.module.css";

export const Footer = () => {
    return (
        <footer className={`${classes["footer"]}`}>
            <div className={`${classes["logo"]}`}>
                <Image src={logo} alt="Logo" />
            </div>
            <div className={`${classes["info"]}`}>
                <a href="#" className={`${classes["info-item"]}`}>
                    Privacy Policy
                </a>
                <span>|</span>
                <a href="#" className={`${classes["info-item"]}`}>
                    Terms of Service
                </a>
            </div>
            <div className={`${classes["copyright"]}`}>
                Copyright 2023. Comic Closet, LLC. All rights reserved.
            </div>
        </footer>
    );
};
