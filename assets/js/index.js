import { Perfil } from "./Perfil.js";
const perfil = new Perfil();

function sobreMim() {
    //const section = document.getElementById('sobreMim-index')
    /* interesses */
    const InteressesDiv = document.getElementById('sobreMim-interesses');
    const interesses = perfil.interesses;

    for (let i of interesses) {
        const div = document.createElement('div');
        const icone = document.createElement('ion-icon');
        icone.setAttribute('name', i.icone)
        const small = document.createElement('small');
        small.textContent = i.nome;

        div.appendChild(icone);
        div.appendChild(small);
        InteressesDiv.appendChild(div)
    }
    /* interesses */

    /* area de texto */
    const area = document.getElementById('sobreMim-texto');
    const h2 = document.createElement('h2');
    h2.textContent = 'Sobre Mim';
    const p1 = document.createElement('p');
    p1.textContent = perfil.sobreMim_p1;
    const p2 = document.createElement('p');
    p2.textContent = perfil.objetivoEmpresa;

    area.appendChild(h2);
    area.appendChild(p1);
    /* area de texto */

    /* linguagens de programação */
    const tecnologiasDiv = document.getElementById('sobreMim-tecnologias');
    const lingProg = perfil.lingProg;

    for (let linguagem of lingProg) {
        const div = document.createElement('div');
        const small = document.createElement('small');
        small.textContent = linguagem.nome;
        const icone = document.createElement('ion-icon');
        icone.setAttribute('name', linguagem.icone);

        div.appendChild(small);
        div.appendChild(icone);
        tecnologiasDiv.appendChild(div)

    }

}

function secEscolaridade(){

    function carregarInfo(nomeInstituicao, nomeCurso, inicio, fim){
        const listItem = document.createElement('div');
        listItem.setAttribute('class', 'list-item');
        const infoListItem = document.createElement('div');
        infoListItem.setAttribute('class', 'info-list-item');
        infoListItem.setAttribute('style', `"background-color: var(--cor-branco-transp);"`)

        const instituicao = document.createElement('p');
        instituicao.setAttribute('class', 'nome-instituicao');
        instituicao.textContent = nomeInstituicao;

        const curso = document.createElement('p');
        curso.setAttribute('class', 'nome-curso');
        curso.textContent = nomeCurso;

        const duracao = document.createElement('p');
        duracao.setAttribute('class', 'duracao');
        duracao.textContent = `${inicio} - ${fim}`;

        infoListItem.appendChild(instituicao);
        infoListItem.appendChild(curso);
        infoListItem.appendChild(duracao);
        listItem.appendChild(infoListItem);

        const span = document.createElement('span');
        span.setAttribute('class', 'hover');
        span.textContent = '...';

        listItem.appendChild(span);
        return listItem;
    }

    const section = document.querySelector('.sec-escolaridade');
    const h2 = document.createElement('h2');
    h2.textContent = 'Formação Acadêmica';
    section.appendChild(h2);

    const graduacoes = perfil.graduacao;
    const graduacaoH5 = document.createElement('h5');
    graduacaoH5.textContent = 'Graduação';
    section.appendChild(graduacaoH5);
    for(let i of graduacoes){
        const item = carregarInfo(i.instituicao, i.nome, i.dtInicio, i.dtConclusao);
        section.appendChild(item)
    }

    const cursoTecnico = perfil.cursoTecnico;
    const cursoTecnicoh5 = document.createElement('h5');
    cursoTecnicoh5.textContent = 'Curso Técnico';
    section.appendChild(cursoTecnicoh5);
    for(let i of cursoTecnico){
        const item = carregarInfo(i.instituicao, i.nome, i.dtInicio, i.dtConclusao);
        section.appendChild(item)
    }

    const curso = perfil.curso;
    const cursoH5 = document.createElement('h5');
    cursoH5.textContent = 'Cursos';
    section.appendChild(cursoH5);
    for(let i of curso){
        const item = carregarInfo(i.instituicao, i.nome, i.dtInicio, i.dtConclusao);
        section.appendChild(item)
    }
} 

sobreMim()
secEscolaridade()