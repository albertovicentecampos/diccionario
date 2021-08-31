import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Espanol } from '../../model/espanol';

@Injectable({
  providedIn: 'root'
})
export class EspanolService {

  private url: string = environment.url;
  private todos: string = "/espanol/"
  private add: string = "/espanol"

  constructor(private http: HttpClient) {

  }

  getPalabras(): Observable<Espanol[]>{
    return this.http.get<Espanol[]>(this.url+this.todos)
  }

  // getPalabra(palabra: string){
  //   let palabras: Espanol[] = []
  //   this.getPalabras().subscribe( p => {
  //     palabras = p
  //     let pal = palabras.filter(p => p.palabra === palabra)
  //   })
  // }

  insertar(palabra: Espanol): Observable<Espanol>{
    return this.http.post<Espanol>(this.url+this.add, palabra);
  }

  delete(palabra: string): Observable<Espanol> {
    return this.http.delete<Espanol>(this.url+this.todos+palabra);
  }

  buscar(palabra: string): Observable<Espanol> {
    return this.http.get<Espanol>(this.url+this.todos+palabra);
  }

  editar(palabra: Espanol): Observable<Espanol> {
    return this.http.put<Espanol>(this.url+this.todos+palabra.palabra, palabra);
  }
}
