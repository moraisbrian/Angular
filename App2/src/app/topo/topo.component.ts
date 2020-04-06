import { Component, OnInit } from '@angular/core';
import { OfertasService } from "../ofertas.service";
import { Observable, Subject, of } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { switchMap, debounceTime } from "rxjs/operators";

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css'],
    providers: [OfertasService]
})
export class TopoComponent implements OnInit {

    public ofertas: Observable<Oferta[]>;
    public subjectPesquisa: Subject<string> = new Subject<string>();

    constructor(private ofertasService: OfertasService) { }

    ngOnInit(): void {
        this.ofertas = this.subjectPesquisa
            .pipe(
                debounceTime(1000), // Tempo de execução do switchMap em milisegundos
                switchMap((termo: string) => {
                    if (termo.trim() == "") {
                        return of<Oferta[]>([]);
                    }
                    return this.ofertasService.pesquisaOfertas(termo);
                })
            );
        
        this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas));
    }

    public pesquisa(termoDaBusca: string): void {
        this.subjectPesquisa.next(termoDaBusca);
    }

}
