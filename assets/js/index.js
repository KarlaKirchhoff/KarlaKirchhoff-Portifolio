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

function secEscolaridade() {

    function carregarInfo(nomeInstituicao, nomeCurso, inicio, fim, descricao, grade) {
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

        /* Tag Span + Função, de clique */
        const span = document.createElement('span');
        span.setAttribute('class', 'hover');
        span.textContent = '...';
        listItem.appendChild(span);

        const div = document.createElement('div');
        div.setAttribute('class', 'info-curso');
        const descDiv = document.createElement('div');
        descDiv.setAttribute('class', 'desc-div');
        const desch4 = document.createElement('h4');
        desch4.textContent = 'Desrição:'
        const descP = document.createElement('p');
        descP.textContent = descricao;

        const gradeDiv = document.createElement('div');
        gradeDiv.setAttribute('class', 'grade-div');
        const gradeH4 = document.createElement('h4');
        gradeH4.textContent = 'Grade:'
        const gradeOl = document.createElement('ol');

        for(let i of grade){
            const li = document.createElement('li');
            li.textContent = `${i};`
            gradeOl.appendChild(li);
        }

        const img = document.createElement('img');
        img.setAttribute('src', './assets/img/perfil.jpg');

        descDiv.appendChild(desch4);
        descDiv.appendChild(descP);
        div.appendChild(descDiv);

        gradeDiv.appendChild(gradeH4);
        gradeDiv.appendChild(gradeOl);
        div.appendChild(gradeDiv);

        div.appendChild(img);

        listItem.appendChild(div);

        span.addEventListener('click', () => {
            //mostrar e ocultar itens
        })
        /* Tag Span + Função, de clique */

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
    for (let i of graduacoes) {
        const item = carregarInfo(i.instituicao, i.nome, i.dtInicio, i.dtConclusao, i.desc, i.grade);
        section.appendChild(item)
    }

    const cursoTecnico = perfil.cursoTecnico;
    const cursoTecnicoh5 = document.createElement('h5');
    cursoTecnicoh5.textContent = 'Curso Técnico';
    section.appendChild(cursoTecnicoh5);
    for (let i of cursoTecnico) {
        const item = carregarInfo(i.instituicao, i.nome, i.dtInicio, i.dtConclusao, i.desc, i.grade);
        section.appendChild(item)
    }

    const curso = perfil.curso;
    const cursoH5 = document.createElement('h5');
    cursoH5.textContent = 'Cursos';
    section.appendChild(cursoH5);
    for (let i of curso) {
        const duracao = `${i.duracao}h`;
        const item = carregarInfo(i.instituicao, i.nome, duracao, i.dtConclusao, i.desc, i.grade);
        section.appendChild(item)
    }
}

function secProjetos(qtd) {

    const projetos = perfil.projetos;

    function carregarInfo(link, linkImg, nome) {
        const a = document.createElement('a');
        a.setAttribute('class card');
        a.setAttribute('href', link);
        const div = document.createElement('div');
        div.setAttribute('class', 'img-card');
        const img = document.createElement('img');
        img.setAttribute('src', linkImg);
        const p = document.createElement('p');
        p.textContent = nome;
    }

    for (let i = 0; i < 8; i++) {
        carregarInfo(projetos[i].link, projetos[i].img, projetos[i].nome);
    }

    if (qtd < 8) {
        const res = 8 - qtd;
    }

}

sobreMim();
secEscolaridade();
//secProjetos(8);



/*

<section class="sec-list">
            <h2>atividades</h2>

            <h5>em andamento</h5>
            <div class="list-item">
                <div class="info-list-item">
                    <p class="nome-instituicao">Descompactador de arquivos</p>
                    <p class="nome-curso">Compactar e Descompactar arquivos '.zip'
                        <span class="linguagens">HTML, CSS E Javascript</span>
                    </p>
                    <p class="duracao">01/2023</p>
                </div> <!-- .list-item -->
                <span class="hover">-- executar --</span>
            </div> <!-- .list-item" -->

            <h5>Concluído</h5>
            <div class="list-item">
                <div class="info-list-item">
                    <p class="nome-instituicao">Descompactador de arquivos</p>
                    <p class="nome-curso">Compactar e Descompactar arquivos '.zip'
                        <span class="linguagens">HTML, CSS E Javascript</span>
                    </p>
                    <p class="duracao">01/2023 <br> 12/2026</p>
                </div> <!-- .list-item -->
                <span class="hover">-- executar --</span>
            </div> <!-- .list-item" -->
        </section>

*/