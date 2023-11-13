import {PersonagemView} from "./components/personagem-view"
import {Mago} from "./modules/mago"
import {Arqueiro} from "./modules/arqueiro";
import {ArqueiroMago} from "./modules/arqueiro-mago";

const magoAntonio = new Mago('Antonio', 4, 'Fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'Gelo', 7, 10)
const arqueiroFilipe = new Arqueiro('Filipe', 7, 10)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'Ar', 4, 8)

const personagens = [
    magoAntonio,
    magaJulia,
    arqueiroFilipe,
    arqueiroMagoChico
]

new PersonagemView(personagens).render()