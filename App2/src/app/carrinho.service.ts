import { ItemCarrinho } from "./shared/item-carrinho.model";
import { Oferta } from "./shared/oferta.model";

class CarrinhoService {
    public itens: ItemCarrinho[] = [];

    public exibirItens(): ItemCarrinho[] {
        return this.itens;
    }

    public incluirItem(oferta: Oferta): void {
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        );
        let itemEncontrado = this.itens.find((item: ItemCarrinho) => item.id == itemCarrinho.id);

        if (itemEncontrado) {
            itemEncontrado.quantidade += 1;
        } else {
            this.itens.push(itemCarrinho);
        }
    }

    public totalCarrinhoCompras(): number {
        let total: number = 0;

        this.itens.map((item: ItemCarrinho) => {
            total += (item.quantidade * item.valor);
        });

        return total;
    }

    public adicionarQuantidade(item: ItemCarrinho): void {
        let itemEncontrado = this.itens.find((valor: ItemCarrinho) => valor.id == item.id);
        itemEncontrado.quantidade += 1;
    }

    public removerQuantidade(item: ItemCarrinho): void {
        let itemEncontrado = this.itens.find((valor: ItemCarrinho) => valor.id == item.id);
        itemEncontrado.quantidade -= 1;
        if (itemEncontrado.quantidade == 0) {
            this.itens.splice(this.itens.indexOf(itemEncontrado), 1);
        }
    }

    public limparCarrinho(): void {
        this.itens = [];
    }
}

export { CarrinhoService };