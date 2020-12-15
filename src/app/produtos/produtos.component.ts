import { Component, OnInit } from '@angular/core';

import { MensagensService } from '../mensagens.service';
import { ProdutosService } from './produtos.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})


export class ProdutosComponent implements OnInit { 
  
  produtos: Produto[];  

  constructor(private produtoService: ProdutosService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {    
    this.produtoService.getProdutos()
        .subscribe(produtos => this.produtos = produtos);
  }

  add(nome: string): void {
    nome = nome.trim();    
    if (!nome) { return; }
      this.produtoService.addProduto({ nome } as Produto)
        .subscribe(produto => {
          this.produtos.push(produto);
      });
  }

  delete(produto: Produto): void {
    this.produtos = this.produtos.filter(h => h !== produto);
      this.produtoService.deleteProduto(produto).subscribe();
  }
  
};

