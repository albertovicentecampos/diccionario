import { Component, OnInit } from '@angular/core';
import { EspanolService } from '../../application/services/espanol.service';
import { Espanol } from '../../model/espanol';

@Component({
  selector: 'app-lista-espanol',
  templateUrl: './lista-espanol.component.html',
  styleUrls: ['./lista-espanol.component.scss']
})
export class ListaEspanolComponent implements OnInit {

  palabras: Espanol[] = [];
  filtrovalor=''

  constructor(private espanolService: EspanolService) { }

  ngOnInit(): void {
    this.espanolService.getPalabras().subscribe(p => {
      this.palabras = p; 
    })
  }
  filtrar(event: Event) {
    this.filtrovalor = (event.target as HTMLInputElement).value;
    //console.log("data: "+ this.dataSource[0].palabra)
    //this.dataSource.filter(p=>p.palabra.indexOf(this.filtrovalor))
  } 

  recibirEliminar($event: number): void{
    this.palabras = this.palabras.filter((palabra: Espanol) => palabra.id !== $event)
  }

}
