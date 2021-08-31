import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingles } from '../../model/ingles';

@Injectable({
  providedIn: 'root'
})
export class InglesService {


  private url: string = environment.url;
  private todos: string = "/ingles/"
  private add: string = "/ingles"

  constructor(private http: HttpClient) {

  }

  getPalabras(): Observable<Ingles[]>{
    return this.http.get<Ingles[]>(this.url+this.todos)
  }


  insertar(palabra: Ingles): Observable<Ingles>{
    return this.http.post<Ingles>(this.url+this.add, palabra);
  }

  delete(palabra: string): Observable<Ingles> {
    return this.http.delete<Ingles>(this.url+this.todos+palabra);
  }

  buscar(palabra: string): Observable<Ingles> {
    return this.http.get<Ingles>(this.url+this.todos+palabra);
  }

  editar(palabra: Ingles): Observable<Ingles> {
    return this.http.put<Ingles>(this.url+this.todos+palabra.palabra, palabra);
  }
}
