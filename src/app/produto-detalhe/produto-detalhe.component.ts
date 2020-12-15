import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProdutosService } from '../produtos/produtos.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  produto: Produto;

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduto();
  }
  
  getProduto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.produtosService.getProduto(id)
        .subscribe(produto => this.produto = produto);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.produtosService.updateProduto(this.produto)
      .subscribe(() => this.goBack());
  }

};


