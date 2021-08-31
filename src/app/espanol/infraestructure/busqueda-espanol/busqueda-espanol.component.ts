import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EspanolService } from '../../application/services/espanol.service';
import { Espanol } from '../../model/espanol';

@Component({
  selector: 'app-busqueda-espanol',
  templateUrl: './busqueda-espanol.component.html',
  styleUrls: ['./busqueda-espanol.component.scss']
})
export class BusquedaEspanolComponent implements OnInit {

  palabras: Espanol[] = []
  palabraEscrita: string = ' '
  palabra: string = ' '

  constructor(private palabraService: EspanolService, private route: Router) { }

  ngOnInit(): void {
  }

  buscar(event: Event){
   // this.palabra = document.getElementById("campobusqueda")
    this.palabraEscrita = (event.target as HTMLInputElement).value;
    this.palabraService.buscar(this.palabraEscrita).subscribe(p=>{
     // this.palabras = p;
    })

  }

  busqueda(){

 
   }

   goBack() {
    this.route.navigate(['/espanol']);
    }
}
