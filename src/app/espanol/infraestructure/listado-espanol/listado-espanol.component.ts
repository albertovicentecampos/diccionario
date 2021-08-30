import { Component, Inject, OnInit } from '@angular/core';
import { EspanolService } from '../../application/services/espanol.service';
import { Espanol, inicializar } from '../../model/espanol';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-listado-espanol',
  templateUrl: './listado-espanol.component.html',
  styleUrls: ['./listado-espanol.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListadoEspanolComponent implements OnInit {
  columnsToDisplay = ['id', 'palabra', 'descripcion', 'fechaAlta', 'fechaModificacion'];
  dataSource: Espanol[] = [];
  expandedElement: Espanol = inicializar();
  filtrovalor = ''
  palabra: Espanol = inicializar();
  palabras: Espanol[] = [];

  constructor(private espanolService: EspanolService ) { }

  ngOnInit(): void {
    console.log("Palabras")
    this.espanolService.getPalabras().subscribe(p => {
      console.log(p)
      this.dataSource = p;
       this.palabras = p; 
    })
  }


  filtrar(event: Event) {
    this.filtrovalor = (event.target as HTMLInputElement).value;
    //console.log("data: "+ this.dataSource[0].palabra)
    //this.dataSource.filter(p=>p.palabra.indexOf(this.filtrovalor))
  } 

  editar(){

  }

  borrar(palabra: string){
    this.espanolService.delete(palabra).subscribe()
  }




}
