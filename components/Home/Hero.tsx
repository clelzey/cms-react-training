import React from "react";
import classes from "../../styles/Home/Hero.module.css";

export const Hero = () => {
    return (
        <div className={`${classes["hero"]}`}>
            <header className={`${classes["header"]}`}>
                <h1 className={`${classes["header-text"]}`}>
                    Comic Closet
                </h1>
            </header>
        </div>
    );
};
