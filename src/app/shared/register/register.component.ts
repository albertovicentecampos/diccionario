import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Usuario } from '../user';
@Component({
  selector: 'app-register-modal',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  static usuarios: Usuario[] = [];

  miFormulario = this.formBuilder.group({
    usuario: ["", [Validators.required]],
    pass: ['', [Validators.required]],
    passrepetida: ['', [Validators.required]]
  });

  constructor(private route: Router, private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  nuevoUsuario() {
    var con = this.miFormulario.get("pass")?.value;
    var conRepe = this.miFormulario.get("passrepetida")?.value
    if (con == conRepe) {
      var usuario: string= this.miFormulario.get("usuario")?.value;
      var user = this.miFormulario.value;
      var Us = new Usuario(usuario, con);
      RegisterComponent.usuarios.push(user);
      

      console.log("!!"+usuario)
      this.loginService.getNombre(usuario).subscribe(p=>{
        
        console.log("Nombre: "+p.length)
        
        if(p.length==0){

          console.log("no existe")
          this.loginService.add(Us).subscribe(c=>{
            console.log("Usuario add")
            this.route.navigate(["./login"])
          })

        }else{
          alert("Ese nombre de usuario ya existe")
        }

      })
      

      //console.log(RegisterComponent.usuarios);
     
    }
    else
      alert("Las contraseñas no coinciden");
  }

}

