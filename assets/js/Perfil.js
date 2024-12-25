class Perfil{
    constructor(){
        this.nome = 'Karla';
        this.sobrenome = 'Kirchhoff';
        this.dtNasc = '2002-12-19';
        this.interesses = ['Programação', 'Eletrônica', 'Design', 'Projetos', 'StartUp'];

        this.formAcademica = [
            {
                tipo: 'graduacao',
                nome: 'Análise e Desenvolvimento de Sistemas',
                instituicao: 'IFPR',
                dtInicio: '2023-03-01',
                dtConclusao: '2026-12-15',
                desc: '',
                grade: []
            }
        ]

        this.redessociais = [
            { nome: 'facebook', link: ''},
            { nome: 'instagram', link: ''},
            { nome: 'whastsapp', link: ''},
            { nome: 'linkedin', link: ''},
            { nome: 'github', link: ''},
            { nome: 'behance', link: ''}
        ];

        this.lingProg = [
            { nome: 'html', tagIcone: '', name: '' },
            { nome: 'css', tagIcone: '', name: '' },
            { nome: 'javascript', tagIcone: '', name: ''}
        ];

        this.ferramentas = [
            {nome:'github', icone:'', tipo:'dev'},
            {nome:'vscode', icone:'', tipo:'dev'},
            {nome:'canva', icone:'', tipo:'design'},
            {nome:'netlify', icone:'', tipo:'dev'},
            {nome:'blender', icone:'', tipo:'dev/design'},
            {nome:'gimp', icone:'', tipo:'design'},
            {nome:'bootstrap', icone:'', tipo:'dev'}
        ];

        this.objetivos = ['Certificação Linux', 'Trabalhar Home Office', 'Concluir faculdade', 'Alguma certificação em Inglês', 'Aprimorar Modelagem 3D', 'Aprimorar Github']; 

        this.pontodFortesPersonalidade = ['franqueza', 'criatividade', 'empatia'];
        this.pontosFracosPersonalidade = ['dispersa', 'controladora', 'autoritária'];

        this.qualidades = ['Facilidade em criar Projetos', 'Bom desempenho em situações estressantes', 'Inteligência Emocional', 'Apta para intermediar problemas e/ou situações estressantes', 'Boa comunicação'];
        this.defeitos = ['Administração de projetos sob demanda', 'Organização do tempo', 'Facilidade em dispersar'];

        this.objetivoEmpresa = 'Procuro uma empresa que acolha pequenos estudantes apaixodanados pelo que fazem, que deêmm oportunidades e abram espaço para o desenvolvimento pessoal e profissional. Procuro empresas que precisem de alguém capaz de enxergar projetos e soluções de maneira ampla e criativa, que precisem de alguém com capacidade para desenvolver o backend e frontend, que entenda sobre sistemas operacionais e o mínimo de redes. Procuro empresas que também estejam procurando alguém como eu.'

        this.sobreMim_p1 = `Ooio, sou ${this.nome} estudante de T.I tanto na graduação como no ensino técnico, amo oque eu faço e estou em constante aprendizado e evolução (em uma jornada difícil e maravilhosa). Desde que eu me conheço por gente tenho uma facilidade enorme em criar projetos (muitas vezes complexos e ambiciosos, tenho que admitir), especialmente quando se trata de desenvolver novas ideias e buscar soluções criativas para problemas desafiadores. Acredito que minha criatividade é uma das minhas maiores forças, pois me permite pensar fora da caixa e trazer abordagens inovadoras para os desafios que enfrento.`;

        this.sobreMim_p2= `No entanto, reconheço que um dos meus desafios tem sido a gestão de projetos e do tempo. Embora eu consiga idealizar e construir soluções de forma eficiente, tenho percebido que a organização e o acompanhamento das etapas do projeto são áreas em que posso melhorar (principalmente quando eu me entretenho com um 'bug' ou com uma ferramenta nova). Sou consciente disso e estou trabalhando para aprimorar minha capacidade de administrar projetos de maneira mais estruturada, garantindo que minha criatividade não se perda e se transforme em resultados concretos.`;

        this.sobreMim_p3 = `Tenho um amor genuíno pelos estudos e estou sempre em busca de novas inovações no campo da TI. Meu interesse por novas tecnologias e tendências me motiva a continuar explorando e aprendendo, sempre em busca de maneiras de melhorar e aplicar os conhecimentos adquiridos.`
        
        this.sobreMim_p4 = `Estou animada para crescer como profissional, aprender com as minhas experiências e continuar contribuindo com ideias criativas e soluções tecnológicas que podem fazer a diferença.`;

        this.sobreMim = [this.sobreMim_p1, this.sobreMim_p2, this.sobreMim_p3, this.sobreMim_p4];
    }

    addRedesSociais(nomeRede, linkRede){
        const redeSocial = { nome: `${nomeRede}`, link: `${linkRede}` }
        this.redessociais.push(redeSocial)
    }

    atualizarRedesSociais(nomeRede, linkRede){
        for(let i of this.redessociais){
            if(nomeRede === i.nome){
                i.link = linkRede
            }else{
                alert('Rede Social não encontrada')
            }
        }
    }

    addInteresses(interesse){
        interesse.push(interesse);
    }

    addLingProg(nomeLingProg, linkLingProg){
        const vnome = nomeLingProg; const vlink = linkLingProg;
        const redeSocial = { nome: `${vnome}`, linkIcone: `${vlink}` }
        this.redessociais.push(redeSocial)
    }

    atualizarLingProg(nomeLingProg, linkLingProg){
        const vnome = nomeLingProg; const vlink = linkLingProg;
        for(let i of this.lingProg){
            if(vnome === nomeLingProg){
                i.link === vlink;
            }
            else{
                alert('Linguagem de Programação não encontrada');
            }
        }
    }
}

export { Perfil }