import React from "react";
import styles from './index.module.css'

export default function NotFoundPage() {

    const links = [
        { pagina: 'Home', link: '#' },
        { pagina: 'Página', link: '#' },
        { pagina: 'Currículo', link: '#' },
        { pagina: 'Design', link: '#' },
    ]

    return (
        <div className={styles.content}>
            <div className={styles["camada-cor"]}>
                <main className={styles["wf-100"]}>
                    <div className={styles["content-area"]}>
                        <nav className={styles.links}>
                            <ul>
                                {links.map((i, idx) => (
                                    <li key={idx}>
                                        <a href={i.link} className={styles["nav-link"]}>{i.pagina}</a>
                                    </li>
                                ))}
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