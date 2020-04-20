import { Component, OnInit, ViewChild } from '@angular/core';
import { Autenticar } from '../autenticacao.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    @ViewChild("publicacoes") public publicacoes: any;

    constructor(private autenticarService: Autenticar) { }

    ngOnInit(): void {
    }

    public sair(): void {
        this.autenticarService.sair();
    }

    public atualizarTimeLine(): void {
        this.publicacoes.atualizarTimeLine();
    }

}
