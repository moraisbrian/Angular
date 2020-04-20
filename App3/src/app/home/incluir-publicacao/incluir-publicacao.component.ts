import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import * as firebase from "firebase";
import { Bd } from "../../bd.service";
import { Progresso } from 'src/app/progresso.service';
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
    selector: 'app-incluir-publicacao',
    templateUrl: './incluir-publicacao.component.html',
    styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

    @Output() public atualizarTimeLine: EventEmitter<any> = new EventEmitter<any>();

    public email: string;
    public imagem: any;

    public progressoPublicacao: string = "pendente";
    public porcentagemUpload: number;

    public formulario: FormGroup = new FormGroup({
        "titulo": new FormControl(null)
    });

    constructor(
        private bdService: Bd,
        private progressoService: Progresso
    ) { }

    ngOnInit(): void {
        firebase.auth().onAuthStateChanged((user) => {
            this.email = user.email;
        });
    }

    public publicar(): void {
        this.bdService.publicar({
            email: this.email,
            titulo: this.formulario.value.titulo,
            imagem: this.imagem[0]
        });

        let continua = new Subject();
        continua.next(true);

        let acompanhamentoUpload = interval(1500)
            .pipe(takeUntil(continua))
            .subscribe(() => {
                this.progressoPublicacao = "andamento";

                this.porcentagemUpload = Math.round(
                    (this.progressoService.estado.bytesTransferred / this.progressoService.estado.totalBytes) * 100
                );

                if (this.progressoService.status === "concluido") {
                    this.progressoPublicacao = "concluido";
                    this.atualizarTimeLine.emit();
                    continua.next(false);
                }
            });
    }

    public preparaImagemUpload(event: Event): void {
        this.imagem = ((<HTMLInputElement>event.target).files);
    }

    public resetModal(): void {
        setTimeout(() => {
            this.porcentagemUpload = 0;
            this.progressoPublicacao = "pendente";
            this.formulario.setValue({"titulo": ""});
        }, 1000);
    }

}
