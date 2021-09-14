import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  static sesionIniciada: boolean = false;
  private urlUsuarios: string = environment.urlUsuario;


  constructor(private router: Router, private http: HttpClient) { }


  iniciar() {
    LoginService.sesionIniciada = true;
    this.router.navigate(["/"]);
  }

  getNombre(n: string): Observable<Usuario[]>{
    console.log("nombre: "+n)
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios?nombreUsuario='+n)
  }
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlUsuarios)
  }

  getUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(this.urlUsuarios+'/'+id)
  }

  add(usuario: Usuario): Observable<Usuario>{
    console.log(usuario)
    return this.http.post<Usuario>(this.urlUsuarios, usuario)
  }
}
