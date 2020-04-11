import { ItemCarrinho } from "./shared/item-carrinho.model";

class CarrinhoService {
    public itemCarrinho: ItemCarrinho[] = [];

    public exibirItems(): ItemCarrinho[] {
        return this.itemCarrinho;
    }
}

export default CarrinhoService;