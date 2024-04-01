function CalculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos`;
}

const pessoa1 = {
    nome : "Maria",
    idade : 30
}

const pessoa2 = {
    nome: "carlos",
    idade: 22
}

console.log(CalculaIdade(pessoa1, 30))
console.log(CalculaIdade.call(pessoa1, 30))
console.log(CalculaIdade.apply(pessoa1, [30]))


