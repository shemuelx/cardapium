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
    this.produtoService.getProduto()
        .subscribe(produtos => this.produtos = produtos);
  }  
};

