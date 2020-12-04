import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

  clientesForm = this.fb.group ({
  
    nome: ['Ze do Caroço', Validators.required],
    email: ['zezito@caroço.com.br', Validators.email, Validators.required],
    cpf: ['78956412389', Validators.required],
    telefone: ['21999888777', Validators.required],
    cep: ['87654321', Validators.required]

  })

  onSubmit() {
   
    alert(this.clientesForm.value);
  }


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
  }

}
