import React from "react";
import './global.css'
import styles from './index.module.css'

import Banner from "./Banner";
import Apresentacao from "./Apresentacao";
import Hero from "./HeroSection";

export default function Index_LandingPage() {
    return (
        <>
            <Banner />
            <Hero />
            <Apresentacao />

        </>
    )
}