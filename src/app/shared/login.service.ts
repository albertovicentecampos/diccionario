import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  static sesionIniciada: boolean = false;

  iniciar(){

      LoginService.sesionIniciada = true;
      this.router.navigate(["/"]);

  }

  constructor(private router:Router) { }
}
