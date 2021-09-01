import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EspanolService } from '../../application/services/espanol.service';
import { Espanol, inicializar } from '../../model/espanol';
import { NuevaEspanolComponent } from '../nueva-espanol/nueva-espanol.component';

@Component({
  selector: 'app-lista-espanol',
  templateUrl: './lista-espanol.component.html',
  styleUrls: ['./lista-espanol.component.scss']
})
export class ListaEspanolComponent implements OnInit {

  palabras: Espanol[] = [];
  filtrovalor=''

  palabra: Espanol = inicializar()

  constructor(private espanolService: EspanolService, private router: Router,  public dialog: MatDialog) { }

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

  goBack() {
    this.router.navigate(['/espanol']);
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(NuevaEspanolComponent, {
        height: '350px',
        width: '500px',
        data: {}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
        
          //this.recibirPadre(result)
          //this.palabras.push(result)
        }
      });
    }

    
}
