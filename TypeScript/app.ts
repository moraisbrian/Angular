import Carro from "./Carro";
import Pessoa from "./Pessoa";
import Concessionaria from "./Concessionaria";

/* Criar carros */
let carroA = new Carro("Fusca", 2);
let carroB = new Carro("Brasilha", 2);
let carroC = new Carro("Celta", 2);

/* Montar lista de carros da concecionaria */
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];

let concecionaria = new Concessionaria("Rua Macauba", listaDeCarros);

/* Comprar o carro */
let cliente = new Pessoa("Antonio", "Monza");