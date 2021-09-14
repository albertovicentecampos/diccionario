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
    email: ["", [Validators.required]],
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

    var usuarios = RegisterComponent.usuarios
    var hay = false;

    var email = this.miFormulario.get("email")?.value;
    var pass = this.miFormulario.get("pass")?.value;

    for(let i in usuarios ) {
      if(usuarios[i].email.includes(email) && usuarios[i].password.includes(pass)){
        this.loginService.iniciar();
        hay = true; 
        this.logService.inicia();
        this.route.navigate(['/inicio']);
      }
    }


    if(!hay){
      let mensaje = "Usuario o contraseña incorrecto"
      if(email=="" && pass==""){
        mensaje = "Introduzca usuario y contraseña"
      }
      alert(mensaje);
    }

  }


}

@Injectable({
  providedIn: 'root'
})
export class LogService {
  isLog = false;
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor(){}

  inicia(){
    this.isLog = true;
    this.change.emit(this.isLog);
  }

}