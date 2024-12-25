import { ElementosHtml } from "./ElementosHtml.js";
import { Perfil } from "./Perfil.js";
const html = new ElementosHtml();
const perfil = new Perfil();

html.criarNavbar();
html.criarRodape()
html.sobreMimExtendido('sobremim-article-texto', 'sobremim-article-texto-p');

function sobreMimHtml(){
    const ferramentas = perfil.ferramentas;
    const interesses = perfil.interesses;
    const objetivos = perfil.objetivos;
    const qualidades = perfil.qualidades;
    const empresa = perfil.objetivoEmpresa;

    const ferramentasUl = document.getElementById('int-ferramentas-ul');
    const interessesUl = document.getElementById('int-interesses-ul');
    const objetivosUl = document.getElementById('int-objetivos-ul');
    const qualidadesUl = document.getElementById('int-qualidades-ul');
    const empresaSec = document.getElementById('sec-empresas');


    for(let i of ferramentas){
        const li = document.createElement('li');
        li.textContent = i.nome;
        ferramentasUl.appendChild(li)
    }

    for(let i of interesses){
        const li = document.createElement('li');
        li.textContent = i;
        interessesUl.appendChild(li)
    }

    for(let i of objetivos){
        const li = document.createElement('li');
        li.textContent = i;
        objetivosUl.appendChild(li)
    }

    for(let i of qualidades){
        const li = document.createElement('li');
        li.textContent = i;
        qualidadesUl.appendChild(li)
    }

    empresaSec.textContent = empresa
}

sobreMimHtml();