import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MensagensService } from '../mensagens.service';

import { Produto } from '../produto'
import { PRODUTOS } from '../mock-produtos';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {   

  constructor(private mensagensService: MensagensService ) { }  

  getProdutos(): Observable<Produto[]> {
    // mensangensService retorna uma string após fetch
    this.mensagensService.add(`Produtos Service: fetched produtos`)
    return of(PRODUTOS)
  }
}
