import {Personagem} from "./personagem";

export class Mago extends Personagem{
    tipo = 'Mago'
    constructor(nome, level, elementoMagico, levelMagico, inteligencia) {
        super(nome, level)
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }

    obterInsignia() {
        if (this.levelMagico >= 5 && this.inteligencia >= 5) {
            return `Mestre do ${this.elementoMagico}`
        }
        return super.obterInsignia();
    }
}