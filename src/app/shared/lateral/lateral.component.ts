import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { LoginService } from '../login.service';
import { LogService } from '../login/login.component';
import { AnimationService } from '../services/animation/animation.service';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.scss']
})
export class LateralComponent implements OnInit {

  entra: boolean = false;
  nombreUs: any = ""
  nombre: any = ""
  hay: any = ''
  token: any = ''
  public user: SocialUser = new SocialUser;


  constructor(private loginService: LoginService,
    private route: Router,
    private logService: LogService,
    private matSnackBar: MatSnackBar,
    private animationService: AnimationService,
    private authService: SocialAuthService) {

    this.logService.change.subscribe(valor => {
      localStorage.setItem('hay', valor)
      console.log("holaaas" + localStorage.getItem('hay'))
      this.hay = localStorage.getItem('hay')
    })

    this.hay = localStorage.getItem('hay')


    this.loginService.change_token.subscribe(valor => {
      localStorage.setItem('token', valor)
      this.token = localStorage.getItem('token')

      // if (this.token != "") {
      //   console.log("yuju")
      //   this.loginService.nombre.subscribe(nombre => {
      //     localStorage.setItem('nombre', nombre)
      //     console.log(nombre)
      //     this.nombreUs = localStorage.getItem('nombre')
      //   })

      //   this.nombreUs = localStorage.getItem('nombre')

      // } else { // se registra como usuario normal
      //   this.logService.nombre.subscribe(nom => {
      //     localStorage.setItem('nom', nom)
      //     this.nombre = localStorage.getItem('nom')
      //   })

      //   this.nombre = localStorage.getItem('nom')
      // }


    })

    this.token = localStorage.getItem('token')



  }


  ngOnInit(): void {

  }


  logout() {
    var valor = localStorage.getItem('hay')
    if (this.hay == "true") {
      localStorage.setItem('hay', "false")
      console.log("valor de salida: " + localStorage.getItem('hay'))
      //this.authService.signOut();
      localStorage.setItem('nom', "")
      this.hay = localStorage.getItem('hay')
      this.nombreUs = localStorage.getItem('nombre')
      this.entra = false;
      this.animationService.realizarAnimacion();
      this.route.navigate(["/login"])
      this.mensaje("Cierre de sesión realizado satisfactoriamente")
    } else if (localStorage.getItem('token') != "") {
      localStorage.setItem('nombre', "")
      this.authService.signOut();
      localStorage.setItem('token', "")

      this.token = localStorage.getItem('token')
      this.animationService.realizarAnimacion();
      this.route.navigate(["/login"])
      this.mensaje("Cierre de sesión realizado satisfactoriamente")
    }
  }

  mensaje(mensaje: string) {
    this.matSnackBar.open(mensaje, "", {
      duration: 5000
    })
  }

}
