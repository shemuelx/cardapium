import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos/produtos.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Cardapium';
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutosService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {    
    this.produtoService.getProdutos()
        .subscribe(produtos => this.produtos = produtos.slice(1, 4));
  }  

}
