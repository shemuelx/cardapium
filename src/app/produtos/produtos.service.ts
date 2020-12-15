import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MensagensService } from '../mensagens.service';

import { Produto } from '../produto'
import { PRODUTOS } from '../mock-produtos';

@Injectable({providedIn: 'root'})

export class ProdutosService {   

  constructor(
    private http: HttpClient,
    private mensagensService: MensagensService ) { } 

    private produtosUrl = 'https://run.mocky.io/v3/01b7537d-d18d-4fcd-af7d-a1e9ecc46e80';  // URL to web api

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


   /* GET produtos do servidor */

  getProdutos(): Observable<Produto[]> {            
    return this.http.get<Produto[]>(this.produtosUrl)
      .pipe(
        tap(_ => this.log('fetched produtos')),
          catchError(this.handleError<Produto[]>('getProdutos', []))
    );  
  }

  /* GET produtos do servidor pelo id */

  getProduto(id: number): Observable<Produto> {
    const url = `${this.produtosUrl}/${id}`;
    return this.http.get<Produto>(url).pipe(
      tap(_ => this.log(`fetched Produto id=${id}`)),
        catchError(this.handleError<Produto>(`getProduto id=${id}`))
    );
  }

  /* POST: add a new produto para o servidor */

  addProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.produtosUrl, produto, this.httpOptions)
      .pipe(
        tap((newProduto: Produto) => this.log(`added produto Id: ${newProduto.id}`)),
          catchError(this.handleError<Produto>('addProduto'))
    );
  }

  /* DELETE: delete produto do servidor */

  deleteProduto(hero: Produto | number): Observable<Produto> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.produtosUrl}/${id}`;

    return this.http.delete<Produto>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted produto Id: ${id}`)),
          catchError(this.handleError<Produto>('deleteProduto'))
    );
  }

  /* PUT: update produto do servidor */

  updateProduto(produto: Produto): Observable<any> {
    return this.http.put(this.produtosUrl, produto, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated produto Id: ${produto.id}`)),
          catchError(this.handleError<any>('updateHero'))
    );
  }
  
  private log(message: string) {
    this.mensagensService.add(`ProdutosService: ${message}`);
  }

   /*
    Handle Http operation that failed.
    Let the app continue.
    param operation - name of the operation that failed
    param result - optional value to return as the observable result
   */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }  



}
