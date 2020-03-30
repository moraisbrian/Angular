import Carro from "./Carro";
import { IConcessionaria } from "./IConcessionaria";

export default class Concessionaria implements IConcessionaria {
    private endereco: string;
    private listaDeCarros: Carro[];

    constructor(endereco: string, listaDeCarros: Carro[]) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    fornecerHorarioDeFuncionamento(): string {
        return "De segunda a sexta das 08:00 as 18:00 e sábado das 08:00 as 12:00";
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros;
    }
}