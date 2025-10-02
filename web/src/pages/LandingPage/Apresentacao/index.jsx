import React from "react";
import styles from './index.module.css'


export default function Apresentacao_LandingPage() {
    return (
        <div className={styles.container}>
            <div className={styles["container-video"]}>
                <video autoPlay loop muted className={styles.video}>
                    <source src="/video/video-tela-preta-computador-2.mp4" type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                </video>
            </div>
            <div className={styles["camada-cor"]}>
                <div className={styles.glass}>
                    <section className={styles.apresentacao}>
                        <img src="" alt="" className="img-area" />
                        <div className="txt-area">
                            <h1>Transformando ideias em soluções digitais completas</h1>
                            <h2>Especialista em Desenvolvimento Web Fullstack, Design e Soluções Mobile Híbridas</h2>
                            <a href="#" className="cta-contato">
                                <button>Me conte sobre o seu projeto!</button>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}