import React from "react";
import styles from './index.module.css'

export default function Banner_LandingPage() {
    return (
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
                        <h2>Desenvolvimento Web</h2>
                        <p>Design</p>
                    </div>
                    <div className={styles["img-area"]}>
                        <img src="/img/avatar/art-karla-kirchhoff.png" alt="" className={styles["img-avatar"]} />
                    </div>
                </div>
            </div>
        </div>
    )
}