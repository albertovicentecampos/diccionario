import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output} from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  @Output() change_token: EventEmitter<any> = new EventEmitter();
  @Output() nombre: EventEmitter<any> = new EventEmitter();
  
  static sesionIniciada: boolean = false;
  private urlUsuarios: string = environment.urlUsuario;
  public user: SocialUser = new SocialUser;

  constructor(private router: Router, private http: HttpClient,private authService: SocialAuthService) { }


  iniciar() {
    localStorage.setItem('hay',"true")
    LoginService.sesionIniciada = true;
    this.router.navigate(["/"]);
  }


  iniciarGoogle(){
    this.authService.authState.subscribe(user => {
      this.user = user;
     // console.log(user.authToken);
      localStorage.setItem('token', this.user.idToken)
      console.log(localStorage.getItem('token'))
     
      this.change_token.emit(this.user.idToken)

    });
    
    this.authService.authState.subscribe(user => {
      this.user = user;
      console.log(user.name);
      localStorage.setItem('', user.name)
      this.nombre.emit(this.user.name)
    });

    this.router.navigate(["/"]);

  }

  getNombre(n: string): Observable<Usuario[]>{
    console.log("nombre: "+n)
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios?nombreUsuario='+n)
  }
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlUsuarios)
  }

  add(usuario: Usuario): Observable<Usuario>{
    console.log(usuario)
    return this.http.post<Usuario>(this.urlUsuarios, usuario)
  }
}
