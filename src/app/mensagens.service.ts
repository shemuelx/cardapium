import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class MensagensService {
  mensagens: string[] = [];

  add(mensagen: string) {
    this.mensagens.push(mensagen);
  }

  clear() {
    this.mensagens = [];
  }  
}
