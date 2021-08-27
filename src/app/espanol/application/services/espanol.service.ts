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

  constructor(private http: HttpClient) {

  }

  getPersona(): Observable<Espanol[]>{
    return this.http.get<Espanol[]>(this.url+this.todos)
  }
}
