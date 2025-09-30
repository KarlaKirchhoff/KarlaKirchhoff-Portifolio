import React, { useState } from 'react';
import styles from './index.module.css'
import Header from '../../../shared/componentes/CurriculoPage/Header';
import Banner from '../../../shared/componentes/CurriculoPage/Banner';
import SobreMim from './components/SobreMim';

import Perfil from '../../../models/Perfil';
const perfil = new Perfil();

export default function CurriculoPage() {

    const interesses = perfil.interesses;
    const cursos = perfil.cursos;

    return (
        <>
            <main className={styles.container}>
                <Header />
                <Banner />

                <div className={styles["grid-icons"]} id="sobreMim-interesses" >
                    {interesses.map((i, idx) => (
                        <div key={idx}>
                            <div className={styles["area-icone"]}>
                                <ion-icon name={i.icone} />
                            </div>
                            <small>{i.nome}</small>
                        </div>
                    ))}
                </div>

                <SobreMim
                    cursos={cursos}
                    texto_sobreMim={perfil.sobreMim_p1}
                />

                <section className={styles["projetos"]}>
                    <h2>Projetos</h2>

                    <div className={styles["cards"]} id="cards-projetos">
                        {perfil.projetos.map((proj, idx) => (
                            <a key={idx} href={proj.link} className="card hover">
                                <div className="img-card">
                                    <img src={proj.img} alt="" />
                                    <p>{proj.nome}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                </section>

            </main >
            <footer className="rodape"></footer>

        </>
    )

}