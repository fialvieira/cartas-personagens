import {Personagem} from "./modules/personagem.js";

/*const personagemJose = {
    nome: 'Jose',
    vida: 7,
    mana: 6,
    level: 3,
    tipo: 'Arqueiro',
}*/

const personagemAna = {
    nome: 'Ana',
    vida: 8,
    mana: 10,
    level: 5,
    tipo: 'Bárbaro'
}

const personagemPedrinho = new Personagem()
personagemPedrinho.nome = 'Pedrinho'
personagemPedrinho.mana = 12
personagemPedrinho.vida = 7
personagemPedrinho.level = 5
personagemPedrinho.tipo = 'Mago'

const personagemJose = new Personagem()
personagemJose.nome = 'José'
personagemJose.tipo = 'Arqueiro'
personagemJose.level = 3

console.log('Insignia de ' + personagemPedrinho.nome + ': ' + personagemPedrinho.obterInsignia())
console.log('Insignia de ' + personagemJose.nome + ': ' + personagemJose.obterInsignia())