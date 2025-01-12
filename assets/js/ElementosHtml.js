import { Perfil } from "./Perfil.js"
const perfil = new Perfil;

class ElementosHtml {
    criarNavbar(){
        const header = document.querySelector('.navbar')
        const navbar = `<div class="box-img">
            <img src="assets/img/perfil.jpg" alt="" class="logo" title="Logo Karla Kirchhoff">
        </div>
        <address class="address-navbar">
            <div href="" class="endereco-navbar">
                <p>IFPR - Instituto Federal do Paraná</p>
                <p style="display: flex; align-items: center; gap: 13px">Brasil, Paranagua - PR
                    <ion-icon name="map-outline" class="icone-navbar"></ion-icon>
                </p>
            </div> <!-- .endereco-navbar -->

            <ul class="links-navbar">
                <li class="hover">
                    <a href="index.html">Início</a>
                </li>
                <li class="hover">
                    <a href="projetos.html">Projetos</a>
                </li>
                <li class="hover">
                    <a href="sobre.html">Sobre Mim</a>
                </li>
                <li class="hover">
                    <a href="design.html">Design</a>
                </li>
            </ul><!-- .links-navbar -->
        </address> <!-- .items-nav -->`;
        header.innerHTML = navbar;

        return navbar
    }

    criarRodape(){
        const footer = document.querySelector('.rodape');
        const redessociais = perfil.redessociais;

        let github = null;
        let whatsapp = null;
        let linkedin = null;
        let behance = null;

        let githubLink = null;
        let whatsappLink = null;
        let linkedinLink = null;
        let behanceLink = null;

        for(let i of redessociais){
            if(i.nome === 'github'){
                github = i.name;
                githubLink = i.link
            }

            if(i.nome === 'whatsapp'){
                whatsapp = i.name;
                whatsappLink = i.link
            }

            if(i.nome === 'linkedin'){
                linkedin = i.name;
                linkedinLink = i.link
            }

            if(i.nome === 'behance'){
                behance = i.name;
                behanceLink = i.link
            }
        }

        const rodape = `<div class="footer-icons">
            <a href=${githubLink} target="_blank">
                <ion-icon class="hover" name=${github}></ion-icon>
            </a>
            <a href=${whatsappLink} target="_blank">
                <ion-icon class="hover" name=${whatsapp}></ion-icon>
            </a>
            <a href=${linkedinLink} target="_blank">
                <ion-icon class="hover" name=${linkedin}></ion-icon>
            </a>
            <a href=${behanceLink} target="_blank">
                <ion-icon class="hover" name=${behance}></ion-icon>
            </a>
        </div>
        <span>Karla Kirchhoff</span>`;
        footer.innerHTML = rodape

        return footer
    }

    sobreMimExtendido(idElemento, classes){
        let elemento = document.getElementById(`${idElemento}`)
        let array = perfil.sobreMim;
        for(let i of array){
            let p = document.createElement('p');
            p.setAttribute('class', classes);
            p.textContent = i;
            elemento.appendChild(p);
        }
    }

    sobreMim(idElemento, classes){
        let elemento = document.getElementById(`${idElemento}`);
        const texto = perfil.sobreMim_p1;
        let p = document.createElement('p');
        p.setAttribute('class', classes);
        p.textContent = texto;
        elemento.appendChild(p);
    }

    lingProg(idElemento, classesP, classesIcone, pPrimeiro){
        let elemento = document.getElementById(`${idElemento}`);
        let div = document.createElement('div')
        const array = perfil.lingProg;

        for(let i of array){
            let small = document.createElement('small');
            let icone = document.createElement('ion-icon');
            icone.setAttribute('name', i.name)

            if(classesP != 'nenhum'){
                small.setAttribute('class', classesP);
            }
            if(classesIcone != 'nenhum'){
                icone.setAttribute('class', classesIcone);
            }

            small.textContent = i.nome;

            if(pPrimeiro){
                div.appendChild(small);
                div.appendChild(icone);
            }else{
                div.appendChild(icone);
                div.appendChild(small);
            }

            elemento.appendChild(div)
        }
    }

    secProjetos(id) {

        const cards = document.getElementById(id);
        const projetos = perfil.projetos;
    
        function carregarInfo(link, linkImg, nome) {
            const card = document.createElement('a');
            card.setAttribute('class', 'card hover');
            card.setAttribute('href', link);
            const div = document.createElement('div');
            div.setAttribute('class', 'img-card');
            const img = document.createElement('img');
            img.setAttribute('src', linkImg);
            const p = document.createElement('p');
            p.innerText = nome;
    
            div.appendChild(img);
            card.appendChild(div);
            card.appendChild(p);
    
            return card
        }
    
        for (let i of projetos) {
            const card = carregarInfo(i.link, i.img, i.nome);
            cards.append(card);
        } 
    }    

}

export { ElementosHtml };