import React from 'react';
import styles from './index.module.css'


export default function IndexPage() {

  const logos = 'img/logo/'

  const glassCards = [
    { texto: 'Landing Page', img: `${logos}logo-landing-page-karla-kirchhoff.png`, href: '#', alt: '' },
    { texto: 'Currículo', img: `${logos}logo-curriculo-karla-kirchhoff.png`, href: '#', alt: '' },
    { texto: 'Design', img: `${logos}logo-landing-page-karla-kirchhoff.png`, href: '#', alt: '' },
  ]

  return (
    <div className={styles.content} style={{
      backgroundImage: "url('img/bg/fundo-cidade-cyberpunk.jpg')"
    }}>
      <main className={styles["home-main"]} >

        <div className={styles["home-text-area"]}>
          <h1 className={styles.nome}>Karla Kirchhoff</h1>
          <h1 className={styles.cargo}>Desenvolvedora FullStack</h1>
          <ul className={styles["cards-servicos"]}>
            {glassCards.map((i, index) => (
              <li key={index} className={styles["glass-card"]}>
                <a href={i.href}>
                  <img src={i.img} alt={i.alt} />
                  <h2>{i.texto}</h2>
                </a>
              </li>
            ))}
          </ul>

          <ul className={styles["lista-tecnologias"]}>
            <li>Desktop</li>
            <li>Mobile</li>
            <li>Sites</li> 
            <li>PWA</li>
            <li>Banco de Dados</li>
            <li>Interface</li>
          </ul>
        </div>

        <div className={styles["img-avatar-karla-kirchhoff"]}
          style={{
            backgroundImage: "url('img/avatar/art-karla-kirchhoff.png')"
          }}>
          <ul className={styles["logos-tecnologias-desenvolvimento"]}>
            <li><img src={`${logos}javascript-logo.png`} alt="" /></li>
            <li><img src={`${logos}typescript-logo.png`} alt="" /></li>
            <li><img src={`${logos}react-logo.png`} alt="" /></li>
          </ul>
        </div>

      </main>
    </div>
  );
}

