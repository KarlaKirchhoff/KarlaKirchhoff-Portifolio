import React from "react";
import styles from './index.module.css'

export default function NotFoundPage() {
    return (
        <div className={styles.content}>
            <div className={styles["camada-cor wf-100 flex-center"]}>
                <main className={styles["wf-100 "]}>
                    <div className={styles["content-area"]}>
                        <nav className={styles.links}>
                            <ul>
                                <li><a href="#" className={styles["nav-link"]}>Home</a></li>
                                <li><a href="#" className={styles["nav-link"]}>Página</a></li>
                                <li><a href="#" className={styles["nav-link"]}>Currículo</a></li>
                                <li><a href="#" className={styles["nav-link"]}>Design</a></li>
                            </ul>
                        </nav>
                        <div className={styles.txt}>
                            <h1 className={styles["h1-1"]}>Página</h1>
                            <h1 className={styles["h1-2"]}>não Encontrada</h1>
                        </div>
                        <p>Karla Kirchhoff</p>
                    </div>

                    <div className={styles["img-area"]}></div>
                </main>
            </div>
        </div>
    )
}