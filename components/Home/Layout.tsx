import React from "react";
import { Header } from "../Header/Header";
import { Hero } from "./Hero";
import { Content } from "./Content";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
    return (
        <>
            <Header />
            <Hero />
            <Content />
            <Footer />
        </>
    )
}