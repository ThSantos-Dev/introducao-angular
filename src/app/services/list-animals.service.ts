import { Injectable } from '@angular/core';
import { IAnimal } from './../interfaces/IAnimal';

// Para requisições HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListAnimalsService {
  // URL da API
  private _apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) {}

  // remove(animals: IAnimal[], animal: IAnimal): IAnimal[] {
  //   console.log('Essa é a service');

  //   // Simulando a requisição com a ação de excluir o dado a lógica de remover do template,
  //   // tem que ser feito no component, não na service
  //   return animals.filter((item) => animal.name !== item.name);
  // }

  remove(id: number) {
    return this.http.delete<IAnimal>(this._apiUrl + `/${id}`);
  }

  // Ele "Observa" se o array de animais está chegando da API
  getAll(): Observable<IAnimal[]> {
    return this.http.get<IAnimal[]>(this._apiUrl);
  }

  getItem(id: number): Observable<IAnimal> {
    return this.http.get<IAnimal>(this._apiUrl + `/${id}`);
  }
}
