import { Component, OnInit } from '@angular/core';
import { PRODUTOS } from '../mock-produtos';
import { Produto } from '../produto';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})


export class ProdutosComponent implements OnInit {
  
  produtos = PRODUTOS;
  selectedProduto: Produto;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(produto: Produto): void {
    this.selectedProduto = produto;
  }

}

