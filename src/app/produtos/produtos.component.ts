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
  selectedProduto: Produto;

  constructor(private produtoService: ProdutosService, 
              private mensagensService: MensagensService) { }

  getProdutos(): void {    
    this.produtoService.getProdutos()
        .subscribe(produtos => this.produtos = produtos);
  }  
  
  ngOnInit(): void {
    this.getProdutos();
  }
  
  onSelect(produto: Produto): void {
    this.selectedProduto = produto;
    this.mensagensService.add(`ProdutosComponent: 
                               Id do Produto selecionado ${produto.id}`);
  }

}

