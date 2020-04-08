import { Pedido } from "./shared/pedido.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
import { URL_API } from "./app.api";
import { map } from 'rxjs/operators';



@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient) {}

    public efetivarCompra(pedido: Pedido): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }

        return this.http.post(
            `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            httpOptions
        )
        .pipe(
            map((resposta: any) => console.log(resposta))
        );
    }
}