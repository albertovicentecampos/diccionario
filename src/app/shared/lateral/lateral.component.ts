import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { LogService } from '../login/login.component';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.scss']
})
export class LateralComponent implements OnInit {

  entra: boolean = false; 
  constructor(private loginService: LoginService, 
    private route: Router,
    private logService: LogService) { }

  ngOnInit(): void {
    this.logService.change.subscribe(valor => {
      this.entra = valor; 
    })

  }

  logout(){
    if (LoginService.sesionIniciada == true) {
      this.entra = false;
      this.route.navigate(["/login"])
    }
  }

}
