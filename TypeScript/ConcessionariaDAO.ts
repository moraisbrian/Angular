import { IDao } from "./IDao";
import Concessionaria from "./Concessionaria";

export class ConcessionariaDAO implements IDao {
    nomeTabela: string = "tb_concessionaria";

    inserir(object: Concessionaria): boolean {
        throw new Error("Method not implemented.");
    }
    atualizar(object: Concessionaria): boolean {
        throw new Error("Method not implemented.");
    }
    remover(id: number): Concessionaria {
        throw new Error("Method not implemented.");
    }
    selecionar(id: number): Concessionaria {
        throw new Error("Method not implemented.");
    }
    selecionarTodos(): [Concessionaria] {
        throw new Error("Method not implemented.");
    }

}