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


  hay: any = 'false'
  barra: any = 'false'
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
      this.hay = localStorage.getItem('hay')
      
      localStorage.setItem('barra','true')
      this.barra = localStorage.getItem('hay')
    })

    this.loginService.change_token.subscribe(valor => {
      localStorage.setItem('token', valor)
      this.token = localStorage.getItem('token')

      localStorage.setItem('barra','true')
      this.barra = localStorage.getItem('hay')
    })

    
    this.hay = localStorage.getItem('hay')
    this.token = localStorage.getItem('token')
    this.barra = localStorage.getItem('barra')

    console.log("Barra: " + this.barra)
  
  }


  ngOnInit(): void {

  }


  logout() {
    var valor = localStorage.getItem('hay')
    if (this.hay == "true") {
      localStorage.setItem('hay', "false")
    
      localStorage.setItem('barra','false')
      this.barra = localStorage.getItem('barra')

      this.hay = localStorage.getItem('hay')
      
      this.animationService.realizarAnimacion();
      this.route.navigate(["/login"])
      this.mensaje("Cierre de sesión realizado satisfactoriamente")

    } else if (localStorage.getItem('token') != "") {
      localStorage.setItem('barra','false')
      this.barra = localStorage.getItem('barra')

      this.authService.signOut();

      localStorage.setItem('token','')
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
