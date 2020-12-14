import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Produto } from '../produto'

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {  

  constructor( private http: HttpClient) { }

  private produtosURL = 'api/produtos';  // URL to web api

  getProdutos(): Observable<Produto[]> {

    return this.http.get<Produto[]>(this.produtosURL)    

  }
}
