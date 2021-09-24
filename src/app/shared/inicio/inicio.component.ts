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
  nombreUser: string | null = ""

  constructor(private loginService: LoginService,
    private route: Router,
    private logService: LogService) { }

  ngOnInit(): void {
    this.loginService.nombre.subscribe(v => {
      console.log("entra")
      localStorage.setItem('nombreUser', v)

    })
    this.logService.nombre.subscribe(n => {
      console.log("entra")
      localStorage.setItem('nombreUser', n)

    })


    this.nombreUser = localStorage.getItem('nombreUser')
  }

}
