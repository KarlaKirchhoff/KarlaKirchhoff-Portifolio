import React, { useState } from 'react';
import styles from './index.module.css'
import Modal from '../Modal/ModalCurso';

export default function SobreMim_Index_CurriculoPage({ texto_sobreMim, cursos }) {

    const [openCertificado, setOpenCertificado] = useState(false);
    const [openInfo, setOpenInfo] = useState(false);
    const [dadosCertificado, setDadosCertificado] = useState(undefined);

    const handleInfoCurso = () => {
        setOpenInfo(!openInfo);
    };

    const handleVerCertificado = (dados) => {
        setDadosCertificado(dados)
        setOpenCertificado(true);
    }

    const handleFecharCertificado = () => {
        setOpenCertificado(false)
    }

    return (
        <>
            <section className={styles["sobre-mim"]} id="sobreMim-index">

                <div className={styles.texto} id="sobreMim-texto">
                    <h2>Sobre Mim</h2>
                    <p>{texto_sobreMim}</p>
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
                                    onClick={() => handleInfoCurso()}
                                >...</span>

                                {openInfo && (
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
                                        <img src={i.img} alt="" onClick={() => handleVerCertificado({img: i.img, nome: i.nome})} />
                                        <button className={styles['fechar-item hover']}
                                            onClick={() => setOpenInfo(false)}>X</button>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>

                <div className={styles["tecnologias grid-icons"]} id="sobreMim-tecnologias">
                </div>
            </section>

            {openCertificado && (
                <Modal
                    onFechar={handleFecharCertificado}
                    dados={dadosCertificado} />
            )}
        </>
    )
}