import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from "../orderm-compra.service";
import { Pedido } from "../shared/pedido.model";

@Component({
    selector: 'app-ordem-compra',
    templateUrl: './ordem-compra.component.html',
    styleUrls: ['./ordem-compra.component.css'],
    providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

    public endereco: string = "";
    public numero: string = ""; 
    public complemento: string = "";
    public formaPagamento: string = "";

    // Controles de validação
    public enderecoValido: boolean;
    public numeroValido: boolean;
    public complementoValido: boolean;
    public formaPagamentoValido: boolean;

    // Estados primitivos dos campos (pristine)
    public enderecoEstadoPrimitivo: boolean = true;
    public numeroEstadoPrimitivo: boolean = true;
    public complementoEstadoPrimitivo: boolean = true;
    public formaPagamentoEstadoPrimitivo: boolean = true;

    // Controlar botão de confirmação do formulário
    public formEstado: string = "disabled";

    constructor(private ordemCompraService: OrdemCompraService) { }

    ngOnInit(): void {
        
    }

    public atualizaEndereco(endereco: string): void {
        this.endereco = endereco;

        this.enderecoEstadoPrimitivo = false;

        if (this.endereco.length > 3) {
            this.enderecoValido = true;
        } else {
            this.enderecoValido = false;
        }

        this.atualizaForm();
    }

    public atualizaNumero(numero: string): void {
        this.numero = numero;

        this.numeroEstadoPrimitivo = false;

        if (this.numero.length > 0) {
            this.numeroValido = true;
        } else {
            this.numeroValido = false;
        }

        this.atualizaForm();
    }

    public atualizaComplemento(complemento: string): void {
        this.complemento = complemento;

        this.complementoEstadoPrimitivo = false;

        if (this.complemento.length > 0) {
            this.complementoValido = true;
        } else {
            this.complementoValido = false;
        }

        this.atualizaForm();
    }

    public atualizaFormaPagamento(formaPagamento: string): void {
        this.formaPagamento = formaPagamento;

        this.formaPagamentoEstadoPrimitivo = false;

        if (this.formaPagamento.length > 0) {
            this.formaPagamentoValido = true;
        } else {
            this.formaPagamentoValido = false;
        }

        this.atualizaForm();
    }

    public atualizaForm(): void {
        if (this.enderecoValido && this.numeroValido && this.formaPagamentoValido) {
            this.formEstado = "";
        } else {
            this.formEstado = "disabled";
        }
    }

    public confirmarCompra(): void {
        let pedido = new Pedido(
            this.endereco,
            this.numero,
            this.complemento,
            this.formaPagamento
        );

        this.ordemCompraService.efetivarCompra(pedido)
            .subscribe();
    }

}
