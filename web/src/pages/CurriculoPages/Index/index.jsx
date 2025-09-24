import React from 'react';
import styles from './index.module.css'
import Header from '../../../shared/componentes/Header';

import Perfil from '../../../models/Perfil';
const perfil = new Perfil();

export default function CurriculoPage() {

    const interesses = perfil.interesses;
    const cursos = perfil.cursos;

    return (
        <>
            <main class="container">
                <Header />
                <section class="sobre-mim" id="sobreMim-index">

                    <div className="habilidades grid-icons" id="sobreMim-interesses" >
                        {interesses.map((i, idx) => (
                            <div key={idx}>
                                <ion-icon name={i.icone} />
                                <small>{i.nome}</small>
                            </div>
                        ))}
                    </div>

                    <div className="texto" id="sobreMim-texto">
                        <h2>Sobre Mim</h2>
                        <p>{perfil.sobreMim_p1}</p>
                        <p>{perfil.objetivoEmpresa}</p>
                    </div>

                    <section className="sec-escolaridade sec-list">
                        <ul>
                            {cursos.map((i, idx) => (
                                <li key={idx} className="list-item">
                                    <div className="info-list-item" style={{ backgroundColor: "var(--cor-branco-transp)" }}>
                                        <p className="nome-instituicao">{i.instituicao}</p>
                                        <p className="nome-curso">{i.nome}</p>
                                        <p className="duracao">{i.duracao}</p>
                                    </div>

                                    <span className="hover">...</span>

                                    <div className="info-curso" id='id'>
                                        <div className="desc-div">
                                            <h4>Desrição:</h4>
                                            <p className="descricao"></p>
                                        </div>

                                        <div className="grade-div">
                                            <h4>Grade:</h4>
                                            <ol>
                                                {i.grade.map((grade, index) => (
                                                    <li key={`grade_${index}`}>{grade}</li>
                                                ))}
                                            </ol>
                                        </div>
                                        <img src={i.img} alt="" />
                                        <button className='fechar-item hover'>X</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <div className="tecnologias grid-icons" id="sobreMim-tecnologias">
                    </div>

                    <section class="projetos">
                        <h2>Projetos</h2>

                        <div class="cards" id="cards-projetos"></div>

                    </section>

                </section>

            </main >

            <footer class="rodape"></footer>

            <section class="modal" id="index-modal">
                <div class="area-botao">
                    <h2 id="h2-modal">Nome Projeto</h2>
                    <button id="modal-close-button">x</button>
                </div>
                <div class="img-area">
                    <img id="img-modal" />
                </div>
            </section>
        </>
    )

}