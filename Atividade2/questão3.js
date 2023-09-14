class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

class Cliente {
  constructor(id, nome, endereco, numeroConta, saldo) {
    this.id = id;
    this.nome = nome;
    this.endereco = endereco;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
  }

  exibirDados() {
    console.log(
      `ID: ${this.id}` +
        `Nome: ${this.nome}` +
        `Endereço: ${this.endereco}` +
        `Número da Conta: ${this.numeroConta}`
    );
  }

  fazerCompra(produto) {
    try {
      if (produto.preco <= this.saldo) {
        console.log(
          `${this.nome} comprou ${produto.nome} por R$ ${produto.preco}.`
        );
        this.atualizarSaldo(-produto.preco);
      } else {
        throw new Error(`Saldo insuficiente para comprar ${produto.nome}.`);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  atualizarSaldo(valor) {
    this.saldo += valor;
    console.log(`Saldo atualizado: R$ ${this.saldo}`);
  }
}

/*
  const cliente1 = new Cliente(1, 'Jossuel', 'Rua JavaScript, N°2310', '44123', 500.0);
  const produto1 = new Produto('Produto A', 1000.0);
  
  cliente1.fazerCompra(produto1);
  */
