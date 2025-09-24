import React from 'react';
import styles from './index.module.css'

export default function Banner_CurriculoPage() {
    return (
        <div className={styles["banner"]}>
            <div className={styles["texto-banner"]}>
                <h1>Karla Kirchhoff</h1>
                <p>Estudante Tecnologia</p>
                <a className="btn" href="https://github.com/KarlaKirchhoff" target="_blank">Acessar Github<ion-icon
                    name="logo-github"></ion-icon></a>
            </div>

            <div className={styles["img-banner"]}>
                <div>
                    <img src="img/perfil-karla-kirchhoff.jpg" alt="Foto de Perfil: Karla Kirchhoff" title="Karla Kirchhoff" />
                </div>
            </div>
        </div>
    )
}