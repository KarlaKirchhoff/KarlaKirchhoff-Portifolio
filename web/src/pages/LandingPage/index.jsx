import React from "react";
import './global.css'
import styles from './index.module.css'

import Banner from "../../shared/componentes/LandinPage/Banner";

export default function Index_LandingPage() {
    return (
        <>
            <Banner />

            <section className="apresentacao">
                <h1>Karla Kirchhoff</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repellat doloribus hic voluptates recusandae ipsam officiis ad sapiente nam, alias numquam obcaecati maxime eius, veniam quibusdam error aliquid illum et?</p>
            </section>
        </>
    )
}