import React from 'react';
import Projeto from '.';
import styles from './contProj.module.css';

export default function Projetos_CurriculoPage({projetos}) {

    return (
        <div className={`${styles.container} ${styles.cards}`}>
            {projetos.map((proj, idx) => (
                <Projeto key={idx} proj={proj} />
            ))}
        </div>
    )
}