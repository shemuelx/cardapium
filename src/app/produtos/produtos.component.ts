import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})


export class ProdutosComponent {

  produtosForm = this.fb.group({
  
    id: ['4321',Validators.required],
    nome: ['coxinha', Validators.required],
    sabor: ['frango', Validators.required],
    quantidade: ['11', Validators.required],
    data: ['01-12-2020', Validators.required]
  })

  onSubmit() {
   
    alert(this.produtosForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

}

