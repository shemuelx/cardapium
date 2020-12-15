import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { MensagensService } from '../mensagens.service';

import { Produto } from '../produto'
import { PRODUTOS } from '../mock-produtos';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {   

  constructor(private mensagensService: MensagensService ) { } 
  
  getProduto(): Observable<Produto[]> {
    // TODO: envia mensagen _after_ fetching produtos
    this.mensagensService.add('HeroService: fetched heroes');
    return of(PRODUTOS);
  }

  getProdutos(id: number): Observable<Produto> {
    // mensangensService retorna uma string após fetch
    this.mensagensService.add(`Produtos Service: fetched produto id ${id}`)
    return of(PRODUTOS.find(produto => produto.id === id))
  }
}
