import { stringify } from '@angular/compiler/src/util';
import { Component, Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Router } from '@angular/router';

import { AuthGuard } from '../auth.guard';


import { LoginService } from '../login.service';
import { RegisterComponent } from '../register/register.component';
import { AnimationService } from '../services/animation/animation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  miFormulario = this.formBuilder.group({
    usuario: ["", [Validators.required]],
    pass: ["", [Validators.required]]
  });


  constructor(private loginService: LoginService,
    private auth: AuthGuard,
    private dialog: MatDialog,
    private route: Router,
    private formBuilder: FormBuilder,
    private logService: LogService,
    private matSnackBar: MatSnackBar,
    private animationService: AnimationService) { }

  ngOnInit(): void {
  }

  Login() {

    var hay = false;

    var usuario = this.miFormulario.get("usuario")?.value;
    var pass = this.miFormulario.get("pass")?.value;

    this.loginService.getNombre(usuario).subscribe(p => {
      if (p.length == 0) {
        localStorage.setItem('hay', 'false')
        hay = false;
      } else {
        if (p[0].password == pass) {
          this.loginService.iniciar();
          hay = true;
          this.logService.enviarNombre(usuario)
          this.logService.inicia();
          this.animationService.realizarAnimacion();
          this.route.navigate(['/inicio']);
          this.mensaje("Inicio de sesión realizado satisfactoriamente")
        }
      }

      if (!hay) {
        let mensaje = "Usuario o contraseña incorrecto"
        if (usuario == "" && pass == "") {
          mensaje = "Introduzca usuario y contraseña"
        }
        alert(mensaje);
      }

    })

  }

  mensaje(mensaje: string){
    this.matSnackBar.open(mensaje,"",{
      duration:5000
    })
  }


}

@Injectable({
  providedIn: 'root'
})
export class LogService {
  isLog = false;
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() nomnbre: EventEmitter<any> = new EventEmitter();

  constructor() { }

  inicia() {
    localStorage.setItem('hay',"true")
    var valor = localStorage.getItem('hay')
    //this.isLog = true;
    this.change.emit(valor);
  }

  enviarNombre(n: string) {
    localStorage.setItem('nombre', n)
    var nombre = localStorage.getItem('nombre')
    this.nomnbre.emit(nombre);
  }

}