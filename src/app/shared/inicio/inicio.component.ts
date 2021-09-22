import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { LogService } from '../login/login.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  entrar: boolean = false;
  nombreU: string = ""
  constructor(private loginService: LoginService, 
    private route: Router,
    private logService: LogService) { }

  ngOnInit(): void {

    this.logService.change.subscribe(valor => {
      console.log("VALOOOOOOR "+ valor)
      this.entrar = valor; 

      this.logService.nombre.subscribe(v=>{
        console.log("Nombre: "+ v)
        this.nombreU = v
      })
    })
    

    

  }

}
