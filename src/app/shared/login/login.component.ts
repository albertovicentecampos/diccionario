import { Component, Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AuthGuard } from '../auth.guard';


import { LoginService } from '../login.service';
import { RegisterComponent } from '../register/register.component';

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
    private logService: LogService) { }

  ngOnInit(): void {
  }

  Login() {

    var hay = false;

    var usuario = this.miFormulario.get("usuario")?.value;
    var pass = this.miFormulario.get("pass")?.value;

    this.loginService.getNombre(usuario).subscribe(p => {
      if (p.length == 0) {
        hay = false;
      } else {
        if (p[0].password == pass) {
          this.loginService.iniciar();
          hay = true;
          this.logService.enviarNombre(usuario)
          this.logService.inicia();
          this.route.navigate(['/inicio']);
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


}

@Injectable({
  providedIn: 'root'
})
export class LogService {
  isLog = false;
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() nomnbre: EventEmitter<string> = new EventEmitter();

  constructor() { }

  inicia() {
    this.isLog = true;
    this.change.emit(this.isLog);
  }

  enviarNombre(n: string) {
    this.nomnbre.emit(n);
  }

}