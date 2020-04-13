import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarrinhoService } from "../carrinho.service";
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
    selector: 'app-ordem-compra',
    templateUrl: './ordem-compra.component.html',
    styleUrls: ['./ordem-compra.component.css'],
    providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

    public idPedidoCompra: number;
    public itemCompraCarrinho: ItemCarrinho[] = [];
    
    public carrinhoVazio: boolean;

    public totalValor: number;

    public formulario: FormGroup = new FormGroup({
        "endereco": new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(120) ]),
        "numero": new FormControl(null, [ Validators.required, Validators.minLength(1), Validators.maxLength(20) ]),
        "complemento": new FormControl(null),
        "formaPagamento": new FormControl(null, [ Validators.required ])
    });

    constructor(
        private ordemCompraService: OrdemCompraService, 
        private carrinhoService: CarrinhoService
    ) { }

    ngOnInit() {
        this.itemCompraCarrinho = this.carrinhoService.exibirItens();
        this.totalValor = this.carrinhoService.totalCarrinhoCompras();
        this.carrinhoVazio = this.carrinhoService.exibirItens().length > 0;
    }

    public confirmarCompra(): void {
        if (this.formulario.status == "INVALID") {
            this.formulario.markAllAsTouched();
        } else {
            if (this.carrinhoService.exibirItens().length == 0) {
                alert("Você não selecionou nenhum item!");
            } else {
                let pedido = new Pedido(
                    this.formulario.value.endereco,
                    this.formulario.value.numero,
                    this.formulario.value.complemento,
                    this.formulario.value.formaPagamento,
                    this.carrinhoService.exibirItens()
                );

                this.ordemCompraService.efetivarCompra(pedido)
                    .subscribe((resposta: any) => {
                        this.idPedidoCompra = resposta.id;
                        this.carrinhoService.limparCarrinho();
                    });
            }
        }
    }

    public adicionar(item: ItemCarrinho): void {
        this.carrinhoService.adicionarQuantidade(item);
        this.totalValor = this.carrinhoService.totalCarrinhoCompras();
        this.carrinhoVazio = this.carrinhoService.exibirItens().length > 0;
    }

    public remover(item: ItemCarrinho): void {
        this.carrinhoService.removerQuantidade(item);
        this.totalValor = this.carrinhoService.totalCarrinhoCompras();
        this.carrinhoVazio = this.carrinhoService.exibirItens().length > 0;
    }

    // Poderia ser inserido no botão do formulário
    // [disabled]="!formulario.valid"
}
