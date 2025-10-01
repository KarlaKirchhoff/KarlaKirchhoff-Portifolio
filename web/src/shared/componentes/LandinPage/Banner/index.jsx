import React from "react";
import styles from './index.module.css'

export default function Banner_LandingPage() {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles["camada-cor"]}>
                    <nav className={styles.navbar}>
                        <ul className={styles["nav-links"]}>
                            <li>Sobre</li>
                            <li>Projetos</li>
                            <li>Contato</li>
                        </ul>
                    </nav>

                    <div className={styles["banner-content"]}>
                        <div className={styles["txt-area"]}>
                            <h1>Karla Kirchhoff</h1>
                            <div className={styles["h2-area"]}><h2 className={styles.h2DevWeb}>Desenvolvimento Web</h2>
                                <h2 className={styles.h2Layout}>Layout e Design</h2></div>
                            <p>Fullstack</p>
                        </div>
                        <div className={styles["img-area"]}>
                            <img src="/img/avatar/art-karla-kirchhoff.png" alt="" className={styles["img-avatar"]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.linha} />
        </>
    )
}