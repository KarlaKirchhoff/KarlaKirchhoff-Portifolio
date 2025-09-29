import React, { useState } from 'react';
import styles from './index.module.css'
import Header from '../../../shared/componentes/CurriculoPage/Header';
import Banner from '../../../shared/componentes/CurriculoPage/Banner';
import Modal from './ModalCurso';

import Perfil from '../../../models/Perfil';
const perfil = new Perfil();

export default function CurriculoPage() {

    const [openInfoCurso, setOpenInfoCurso] = useState(false);
    const [openCertificado, setOpenCertificado] = useState(false);
    const [dadosCertificado, setDadosCertificado] = useState(undefined);

    const handleVerInfoCurso = () => {
        setOpenInfoCurso(true)
    }

    const handleFecharInfoCurso = () => {
        setOpenInfoCurso(false)
    }

    const handleVerCertificado = (dados) => {
        setDadosCertificado(dados);
        setOpenCertificado(true)
    }

    const handleFecharCertificado = () => {
        setOpenCertificado(false)
    }

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

                <section className={styles["sobre-mim"]} id="sobreMim-index">

                    <div className={styles.texto} id="sobreMim-texto">
                        <h2>Sobre Mim</h2>
                        <p>{perfil.sobreMim_p1}</p>
                    </div>

                    <section className={styles["sec-list"]}>
                        <ul>
                            {cursos.map((i, idx) => (
                                <li key={idx} className={styles["list-item"]}>
                                    <div className={styles["info-list-item"]}>

                                        <h5 className={styles["nome-instituicao"]}>{i.instituicao}</h5>
                                        <h5 className={styles["nome-curso"]}>{i.nome}</h5>
                                        <h5 className={styles["duracao"]}>{i.duracao} horas</h5>

                                    </div>

                                    <span className="hover"
                                        onClick={() => handleVerInfoCurso()}
                                    >...</span>

                                    {openInfoCurso && (
                                        <div className={styles["info-curso"]} id='id'>
                                            <div className={styles["desc-div"]}>
                                                <h4>Desrição:</h4>
                                                <p className={styles["descricao"]}>{i.desc}</p>
                                            </div>

                                            <div className={styles["grade-div"]}>
                                                <h4>Grade:</h4>
                                                <ol>
                                                    {i.grade.map((grade, index) => (
                                                        <li key={`grade_${index}`}>{grade}</li>
                                                    ))}
                                                </ol>
                                            </div>
                                            <img src={i.img} alt="" onClick={() => handleVerCertificado(i.img)} />
                                            <button className={styles['fechar-item hover']}
                                                onClick={() => handleFecharInfoCurso()}>X</button>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <div className={styles["tecnologias grid-icons"]} id="sobreMim-tecnologias">
                    </div>
                </section>

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

            {openCertificado && (
                <Modal
                    onFechar={handleFecharCertificado}
                    dados={dadosCertificado} />
            )}
        </>
    )

}