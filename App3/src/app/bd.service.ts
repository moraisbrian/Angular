import * as firebase from "firebase";
import { Injectable } from '@angular/core';
import { Progresso } from './progresso.service';

@Injectable()
export class Bd {

    constructor(private progressoService: Progresso) {}

    public publicar(publicacao: any): void {

        firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
            .push({ titulo: publicacao.titulo })
            .then((resposta: any) => {
                const nomeImagem = resposta.key
                firebase.storage().ref()
                    .child(`imagens/${nomeImagem}`)
                    .put(publicacao.imagem)
                    .on(firebase.storage.TaskEvent.STATE_CHANGED,
                        (snapshot: any) => { // Acompanhamento do processo do upload
                            this.progressoService.status = "andamento";
                            this.progressoService.estado = snapshot;
                        },
                        (error) => { // Tratativa de erro
                            this.progressoService.status = "erro";
                        },
                        () => { // Finalização do processo
                            this.progressoService.status = "concluido";
                        }
            );
        });
        
    }

}