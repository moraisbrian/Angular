import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-acesso',
    templateUrl: './acesso.component.html',
    styleUrls: ['./acesso.component.css'],
    animations: [
        trigger("animacao-banner", [
            state("criado", style({
                opacity: 1
            })),
            transition("void => criado", [
                style({ opacity: 0, transform: "translate(-50px, 0)" }),
                animate("500ms 0s ease-in-out") // duracao, delay e aceleracao
            ])
        ]),
        trigger("animacao-login", [
            state("criado", style({
                opacity: 1
            })),
            transition("void => criado", [
                style({ opacity: 0, transform: "translate(50px, 0)" }),
                animate("500ms 0s ease-in-out") // duracao, delay e aceleracao
            ])
        ])
    ]
})
export class AcessoComponent implements OnInit {

    public estadoBanner: string = "criado";
    public estadoLogin: string = "criado";

    public cadastro: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    public exibirPainel(event: string): void {
        if (event == "cadastro") {
            this.cadastro = true;
        } else {
            this.cadastro = false;
        }
    }

}
