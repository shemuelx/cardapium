import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})


export class ProdutosComponent {

  produtosForm = new FormGroup ({
  
    id: new FormControl(''),
    nome: new FormControl(''),
    sabor: new FormControl(''),
    quantidade: new FormControl(''),
    data: new FormControl('')

  })

  onSubmit() {
   
    alert(this.produtosForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

