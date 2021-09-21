import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  hay: any = ''

  constructor(private loginService: LoginService,
    private route: Router,
    private logService: LogService,
    private matSnackBar: MatSnackBar,
    private animationService: AnimationService) { }

  ngOnInit(): void {
    this.logService.change.subscribe(valor => {
      localStorage.setItem('hay', valor)
      console.log("holaaas" + localStorage.getItem('hay'))
      this.hay = localStorage.getItem('hay')
      //this.entra = valor; 
    })

    this.hay = localStorage.getItem('hay')
    console.log("AHORA: " + this.hay)

    this.logService.nomnbre.subscribe(v => {
      localStorage.setItem('nombre', v)
      this.nombreUs = localStorage.getItem('nombre')
    })

    this.nombreUs = localStorage.getItem('nombre')
  }


  logout() {
    var valor = localStorage.getItem('hay')

    if (this.hay == "true") {
      localStorage.setItem('hay', "false")
      console.log("valor de salida: " + localStorage.getItem('hay'))
      this.hay = localStorage.getItem('hay')
      this.nombreUs = localStorage.getItem('nombre')
      this.entra = false;
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
