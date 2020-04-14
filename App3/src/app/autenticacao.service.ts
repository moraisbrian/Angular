import { Injectable } from "@angular/core";
import { Usuario } from "./acesso/usuario.model";
import * as firebase from "firebase";

@Injectable()
export class Autenticar {
    
    public cadastrarUsuario(usuario: Usuario): void {

        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {
                console.log(resposta);
            })
            .catch((erro: Error) => {
                console.log(erro);
            });
    }
}