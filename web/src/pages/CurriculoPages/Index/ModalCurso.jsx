import React from 'react';
import styles from './modal.module.css'

export default function ModalCurso({ onFechar, dados }) {

    const handleFechar = () => {
        onFechar();
    };

    return (
        <section className={styles.modal} id="index-modal">
            <div className={styles["area-botao"]}>
                <h2 id="h2-modal">{dados.nome}</h2>
                <button id="modal-close-button"
                onClick={handleFechar}>x</button>
            </div>
            <div className={styles["img-area"]}>
                <img id="img-modal" href={dados.img} />
            </div>
        </section>
    )
}