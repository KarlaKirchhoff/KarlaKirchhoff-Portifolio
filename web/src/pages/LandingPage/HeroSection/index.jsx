import React from "react";
import styles from './index.module.css'


export default function Hero_LandingPage() {
    return (
        <section className={styles.container}>
            <div className={styles["titulo-area"]}>
                <h1>Desenvolvimento Web Fullstack, Design e Sistemas Mobile</h1>
            </div>
            <div className={styles["txt-area"]}>
                <h2>Construa seu site no futuro</h2>
                <div className={styles["grid-area"]}>
                    <a href="#" className={`${styles.area} ${styles.glass}`}>
                        <img src="./img/gif/homem-programando.gif" alt="" />
                        <p>Portifolio</p>

                    </a>
                    <a href="#" className={`${styles.area} ${styles.glass}`}>
                        <img src="./img/gif/human-robot-inteligencia-artificial.gif" alt="" />
                        <p>Serviços</p>
                    </a>
                    <a href="#" className={`${styles.area} ${styles.glass} ${styles.area1}`}>
                        <img src="./img/gif/inteligencia-artificial-gif.gif" alt="" />
                        <p>Contato</p>
                    </a>
                </div>

                <a href="#" className={styles.cta}>
                    <button>Transforme Sua Ideia em Realidade Digital</button>
                </a>
            </div>
        </section>
    )
}