import React from 'react';
import styles from './index.module.css'

export default function Header() {

    linksNavbar = [
        { link: "index.html", titulo: "Home" },
        { link: "projetos.html", titulo: "Projetos" },
        { link: "sobre.html", titulo: "Sobre Mim" },
        { link: "design.html", titulo: "Design" }
    ]

    return (
        <nav class="navbar">
            <div className={styles["box-img"]}>
                <img src="assets/img/perfil.jpg" alt="" className="logo" title="Logo Karla Kirchhoff" />
            </div>
            <address className={styles["address-navbar"]}>
                <div href="" className={styles["endereco-navbar"]}>
                    <p>IFPR - Instituto Federal do Paraná</p>
                    <p style="display: flex; align-items: center; gap: 13px">Brasil, Paranagua - PR
                        <ion-icon name="map-outline" className="icone-navbar"></ion-icon>
                    </p>
                </div>

                <ul className={styles["links-navbar"]}>
                    {linksNavbar.map((i, idx) => (
                        <li key={idx} className="hover">
                            <a href={i.link}>{i.titulo}</a>
                        </li>
                    ))}
                </ul >
            </address >
        </nav>
    )
}