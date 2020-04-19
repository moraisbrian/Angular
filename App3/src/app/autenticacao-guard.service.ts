import { CanActivate } from "@angular/router";
import { Injectable } from '@angular/core';
import { Autenticar } from './autenticacao.service';

@Injectable()
export class AutenticacaoGuard implements CanActivate {

    constructor(private autenticarService: Autenticar) {}

    canActivate(): boolean{
        return this.autenticarService.autenticado();
    }

}