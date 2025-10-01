import React from "react"
import styles from "./index.module.css"

export default function Projeto_CurriculoPage({ proj }) {

    {/* <a href={proj.link || '#'} className="card hover">
            <div className="img-card">
                <img src={proj.img} alt="" />
                <p>{proj.nome}</p>
            </div>
        </a> */}

    return (
        <a href='#' className={`${styles.card} ${styles.hover} ${styles.glass}`}>
            <div className={styles["img-card"]}>
                <div className={styles["img-area"]}>
                    <img src='./img/bg/fundo-cidade-cyberpunk_2.jpg' alt="" />
                </div>
                <p>proj.nome</p>
            </div>
        </a>

    )
}