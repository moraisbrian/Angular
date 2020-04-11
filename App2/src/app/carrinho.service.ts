import { ItemCarrinho } from "./shared/item-carrinho.model";
import { Oferta } from "./shared/oferta.model";

class CarrinhoService {
    public itens: ItemCarrinho[] = [];

    public exibirItems(): ItemCarrinho[] {
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
        let itemEncontrado = this.itens.find((item: ItemCarrinho) => item.id == itemCarrinho.id)

        if (itemEncontrado) {
            itemEncontrado.quantidade += 1;
        } else {
            this.itens.push(itemCarrinho);
        }
    }
}

export { CarrinhoService };