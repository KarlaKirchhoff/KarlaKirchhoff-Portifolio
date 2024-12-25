class Cursos{
    constructor(nome, tipo, duracao, descricao, instituicao){
        this.nome = nome;
        this.tipo = tipo; /* Graduação, curso, curso técnico */
        this.duracao = duracao;
        this.descricao = descricao;
        this.instituicao = instituicao;
        this.icone;
        this.img;
        this.link = '';
    }
}

export { Cursos };