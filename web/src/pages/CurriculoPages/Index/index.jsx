import React, { useState } from 'react';
import styles from './index.module.css'
import Header from '../../../shared/componentes/Header';
import Modal from './ModalCurso';

import Perfil from '../../../models/Perfil';
const perfil = new Perfil();

export default function CurriculoPage() {

    const [openInfoCurso, setOpenInfoCurso] = useState(false);
    const [dadosCurso, setDadosCurso] = useState(undefined);
    const [openCertificado, setOpenCertificado] = useState(false);
    const [dadosCertificado, setDadosCertificado] = useState(undefined);

    function toggleAtivo() {
        const modal = document.getElementById('index-modal');
        modal.classList.toggle('ativo');
    }

    const handleVerInfoCurso = () => {
        setOpenInfoCurso(true)
        toggleAtivo()
    }

    const handleFecharInfoCurso = () => {
        toggleAtivo()
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
                <section className={styles["sobre-mim"]} id="sobreMim-index">

                    <div className={styles["habilidades grid-icons"]} id="sobreMim-interesses" >
                        {interesses.map((i, idx) => (
                            <div key={idx}>
                                <ion-icon name={i.icone} />
                                <small>{i.nome}</small>
                            </div>
                        ))}
                    </div>

                    <div className={styles.texto} id="sobreMim-texto">
                        <h2>Sobre Mim</h2>
                        <p>{perfil.sobreMim_p1}</p>
                        <p>{perfil.objetivoEmpresa}</p>
                    </div>

                    <section className={styles["sec-escolaridade sec-list"]}>
                        <ul>
                            {cursos.map((i, idx) => (
                                <li key={idx} className={styles["list-item"]}>
                                    <div className={styles["info-list-item"]} style={{ backgroundColor: "var(--cor-branco-transp)" }}>

                                        <p className={styles["nome-instituicao"]}>{i.instituicao}</p>
                                        <p className={styles["nome-curso"]}>{i.nome}</p>
                                        <p className={styles["duracao"]}>{i.duracao}</p>

                                    </div>

                                    <span className="hover"
                                        onClick={() => handleVerInfoCurso}>...</span>

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
                                            <img src={i.img} alt="" onClick={() => handleVerCertificado({ nome: i.nome, img: i.img })} />
                                            <button className={styles['fechar-item hover']}
                                                onClick={() => handleFecharInfoCurso}>X</button>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <div className={styles["tecnologias grid-icons"]} id="sobreMim-tecnologias">
                    </div>

                    <section className={styles["projetos"]}>
                        <h2>Projetos</h2>

                        <div className={styles["cards"]} id="cards-projetos"></div>

                    </section>
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