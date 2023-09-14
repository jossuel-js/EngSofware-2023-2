class Conteudo {
  exibir() {
    throw new Error("Erro na criação");
  }
}

class Post extends Conteudo {
  constructor(titulo, texto) {
    super();
    this.titulo = titulo;
    this.texto = texto;
  }

  exibir() {
    console.log(`Post - Título: ${this.titulo}`);
    console.log(`Texto: ${this.texto}`);
  }
}

class Usuario {
  constructor(nome) {
    this.nome = nome;
    this.conteudos = [];
  }

  criarPost(titulo, texto) {
    this.conteudos.push(new Post(titulo, texto));
  }

  exibirConteudos() {
    console.log(`Conteúdos criados por ${this.nome}:`);
    for (const conteudo of this.conteudos) {
      conteudo.exibir();
      console.log();
    }
  }
}

// Exemplo de uso
const usuario = new Usuario("João");

usuario.criarPost("Meu primeiro post", "Este é o texto do meu primeiro post.");
usuario.exibirConteudos();
