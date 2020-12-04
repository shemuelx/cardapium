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
  
    nome: ['', Validators.required],
    email: ['', Validators.email],
    cpf: ['', Validators.required],
    telefone: ['', Validators.required],
    cep: ['', Validators.required]

  })

  onSubmit() {
   
    alert(this.clientesForm.value);
  }


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
  }

}
