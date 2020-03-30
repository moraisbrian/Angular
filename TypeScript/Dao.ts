import { IDao } from "./IDao";

export class Dao<T> implements IDao<T> {
    nomeTabela: string = "";
    inserir(object: T): boolean {
        throw new Error("Method not implemented.");
    }
    atualizar(object: T): boolean {
        throw new Error("Method not implemented.");
    }
    remover(id: number): T {
        throw new Error("Method not implemented.");
    }
    selecionar(id: number): T {
        throw new Error("Method not implemented.");
    }
    selecionarTodos(): [T] {
        throw new Error("Method not implemented.");
    }
    
}