class Perfil{
    constructor(){
        this.nome = 'Karla';
        this.sobrenome = 'Kirchhoff';
        this.dtNasc = '2002-12-19';
        this.interesses = [
            {nome:'Programação', icone:"code-working-outline"}, 
            {nome:'Eletrônica', icone:"hardware-chip-outline"}, 
            {nome:'Projetos', icone:"school-outline"}, 
            {nome:'Design', icone:'brush-outline'},
            {nome:'StartUp', icone:'bulb-outline'}
        ];

        this.graduacao = [
            {
                nome: 'Análise e Desenvolvimento de Sistemas',
                instituicao: 'IFPR',
                dtInicio: '2023-03-01',
                dtConclusao: '2026-12-15',
                desc: 'Concluído 3 semestres',
                grade: ['algoritmos', 'banco de dados', 'desenvolvimento web', 'teoria geral da administração', 'emprendedorismo', 'sistemas operacionais', 'redes de computadores', 'arquitetura de software', 'arquitetura de computadores'],
                img: './asssets/img/certificados/'
            }
        ]

        this.cursoTecnico = [
            {
                nome: 'Informática para Internet',
                instituicao: 'Senac',
                dtInicio: '2023-03-01',
                dtConclusao: '2026-12-15',
                desc: '',
                grade: [],
                img: './asssets/img/certificados/'
            }
        ]

        this.curso = [
            {
                nome: 'fundamentos da lógica de programação',
                instituicao: 'Fundação Bradesco',
                duracao: 15,
                dtConclusao: '2023',
                desc: '',
                grade: ['Lógica', 'Algoritmo', 'Pseudocódigo', 'Controle de Fluxo', 'Estruturas de Repetição'],
                img: './assets/img/certificados/fundLogicaProgramacao.png'
            },
            {
                nome: 'Projetos de Sistemas de T.I.',
                instituicao: 'Fundação Bradesco',
                duracao: 15 ,
                dtConclusao: '2023',
                desc: '',
                grade: ['Processos de Desenvolvimento de Sistemas de Informação', 'Engenharia de Software'],
                img: './assets/img/certificados/ptojSistemasTI'
            },
            {
                nome: 'HTML básico e Avançado',
                instituicao: 'Fundação Bradesco',
                duracao: 12 ,
                dtConclusao: '2022',
                desc: '',
                grade: ['tabelas', 'formulários', 'iframes'],
                img: './assets/img/certificados/html.png'
            },
            {
                nome: 'Fundamentos do design Gráfico',
                instituicao: 'Fundação Bradesco',
                duracao: undefined ,
                dtConclusao: '2022',
                desc: '',
                grade: ['Principios de Design Gráfico', 'Tipos e formatos de Arquivos'],
                img: './assets/img/certificados/fundDesignGrafico.png'
            },
            {
                nome: 'Fundamentos de T.I - Hardware e Software',
                instituicao: 'Fundação Bradesco',
                duracao: 6 ,
                dtConclusao: '2021',
                desc: '',
                grade: ['Introdução ao Sistema de Computação', 'Conceitos de hardware e software', 'Prevenção e segurança'],
                img: './assets/img/certificados/fundamentosTI.png'
            },
            {
                nome: 'Microsoft Excel 2016 - Básico',
                instituicao: 'Fundação Bradesco',
                duracao: 6 ,
                dtConclusao: '2021',
                desc: '',
                grade: ['Editando a pasta de trabalho ou planilha', 'Formatando tabelas e células', 'Trabalhando com fórmulas', 'Gráficos'],
                img: './assets/img/certificados/excel2016Basico.png'
            }
        ]

        this.redessociais = [
            { nome: 'facebook', link: 'https://www.facebook.com/karla.kirchhoff.3/', icone:'<ion-icon name="logo-facebook"></ion-icon>', name:'logo-facebook'},
            { nome: 'instagram', link: 'https://www.instagram.com/karla.kirchhoff?igsh=MWVtY25xcWw4MW50YQ%3D%3D%27', icone:'<ion-icon name="logo-instagram"></ion-icon>', name:'logo-instagram'},
            { nome: 'whatsapp', link: 'https://wa.me/41984396465', icone:'<ion-icon name="logo-whatsapp"></ion-icon>', name: 'logo-whatsapp'},
            { nome: 'linkedin', link: 'https://www.linkedin.com/in/karla-kirchhoff-990452204', icone:'<ion-icon class="hover" name="logo-linkedin"></ion-icon>', name: 'logo-linkedin'},
            { nome: 'github', link: 'https://github.com/KarlaKirchhoff', icone:'<ion-icon name="logo-github"></ion-icon>', name: 'logo-github'},
            { nome: 'behance', link: 'https://www.behance.net/keikheykirchho', icone:'<ion-icon name="logo-behance"></ion-icon>', name:'logo-behance'}
        ];

        this.lingProg = [
            { nome: 'html', icone:'logo-html5'},
            { nome: 'css', icone:'logo-css3'},
            { nome: 'js', icone: 'logo-javascript'}
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

        this.habilidades = [
            {nome:'programação', icone:''},
            {nome:'design', icone:''},
            {nome:'projetos', icone:''}
        ];

        this.projetos = [
            {nome: 'Site Senac', img:'./assets/img/logo/logoprojetos.png', link:'assets/paginas/landingpage-main/index.html'},
            {nome: 'Curriculo Bruno', img:'./assets/img/logo/logoprojetos.png', link:'assets/paginas/landingpage-main/index.html'},
            {nome: 'Jogo Mario', img:'./assets/img/logo/logoprojetos.png', link:'assets/paginas/landingpage-main/index.html'},
            {nome: 'Landing Page', img:'./assets/img/logo/logoprojetos.png', link:'assets/paginas/landingpage-main/index.html'},
            {nome: 'Ecommerce MS Flix', link:'assets/paginas/landingpage-main/index.html', img:'./assets/img/logo/logoprojetos.png'},
            {nome: 'Verificar Hora', img:'./assets/img/logo/logoprojetos.png', link:'assets/paginas/landingpage-main/index.html'}
        ]

        this.objetivos = ['Certificação Linux', 'Trabalhar Home Office', 'Concluir faculdade', 'Alguma certificação em Inglês', 'Aprimorar Modelagem 3D', 'Aprimorar Github']; 

        this.pontodFortesPersonalidade = ['franqueza', 'criatividade', 'empatia'];
        this.pontosFracosPersonalidade = ['dispersa', 'controladora', 'autoritária'];

        this.qualidades = ['Facilidade em criar Projetos', 'Bom desempenho em situações estressantes', 'Inteligência Emocional', 'Apta para intermediar problemas e/ou situações estressantes', 'Boa comunicação'];
        this.defeitos = ['Administração de projetos sob demanda', 'Organização do tempo', 'Facilidade em dispersar'];

        this.objetivoEmpresa = 'Procuro uma empresa que acolha pequenos estudantes apaixodanados pelo que fazem, que deêmm oportunidades e abram espaço para o desenvolvimento pessoal e profissional. Procuro empresas que precisem de alguém capaz de enxergar projetos e soluções de maneira ampla e criativa, que precisem de alguém com capacidade para desenvolver o backend e frontend, que precise de alguém que entenda sobre sistemas operacionais e o mínimo de redes. Procuro empresas que também estejam procurando alguém como eu.'

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