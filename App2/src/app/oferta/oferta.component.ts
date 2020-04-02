import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from "../ofertas.service";
import { Oferta } from '../shared/oferta.model';

@Component({
    selector: 'app-oferta',
    templateUrl: './oferta.component.html',
    styleUrls: ['./oferta.component.css'],
    providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

    public oferta: Oferta;
    public imagemDestaque: string;

    constructor(
        private route: ActivatedRoute, 
        private ofertasService: OfertasService
        ) { }

    ngOnInit(): void {
        this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
            .then((oferta: any) => {
                this.oferta = oferta[0];
                this.imagemDestaque = oferta[0].imagens[0].url;
            });
    }

}
