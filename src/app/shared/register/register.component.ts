import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from '../user';
@Component({
  selector: 'app-register-modal',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  static usuarios: Usuario[] = [];

  miFormulario = this.formBuilder.group({
    email: ["", [Validators.required]],
    pass: ['', [Validators.required]],
    passrepetida: ['', [Validators.required]]
  });

  constructor(private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  nuevoUsuario() {
    var con = this.miFormulario.get("pass")?.value;
    var conRepe = this.miFormulario.get("passrepetida")?.value
    if (con == conRepe) {
      var email = this.miFormulario.get("email")?.value;
      var Us = new Usuario(email, con);
      RegisterComponent.usuarios.push(Us);
      console.log(RegisterComponent.usuarios);
      this.route.navigate(["./login"])
    }
    else
      alert("Las contraseñas no coinciden");
  }

}

