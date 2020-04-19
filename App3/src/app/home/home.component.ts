import { Component, OnInit } from '@angular/core';
import { Autenticar } from '../autenticacao.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private autenticarService: Autenticar) { }

    ngOnInit(): void {
    }

    public sair(): void {
        this.autenticarService.sair();
    }

}
