import React, { useState } from "react";
import Image from "next/image";
import classes from "../../styles/Header/Header.module.css";
import logo from "../../public/logo.png"
import { Menu } from "./Menu";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] =
        useState<boolean>(false);

    const onHamburgerMenuClick = () => {
        setIsHamburgerMenuOpen((prev) => !prev);
    };

    return (
        <nav className={`${classes["nav"]}`}>
            <div className={`${classes["logo"]}`}>
                <Image src={logo} alt="Logo" />
            </div>
            <MobileMenu
                onHamburgerMenuClick={onHamburgerMenuClick}
                isHamburgerMenuOpen={isHamburgerMenuOpen}
            />
            <Menu />
        </nav>
    );
};