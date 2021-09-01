import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Espanol } from 'src/app/espanol/model/espanol';
import { InglesService } from '../../application/services/ingles.service';
import { Ingles } from '../../model/ingles';
import { NuevaInglesComponent } from '../nueva-ingles/nueva-ingles.component';

@Component({
  selector: 'app-lista-ingles',
  templateUrl: './lista-ingles.component.html',
  styleUrls: ['./lista-ingles.component.scss']
})
export class ListaInglesComponent implements OnInit {


  palabras: Ingles[] = [];
  filtrovalor = ''

  constructor(private inglesService: InglesService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.inglesService.getPalabras().subscribe(p => {
      this.palabras = p;
    })
  }
  filtrar(event: Event) {
    this.filtrovalor = (event.target as HTMLInputElement).value;
    //console.log("data: "+ this.dataSource[0].palabra)
    //this.dataSource.filter(p=>p.palabra.indexOf(this.filtrovalor))
  }

  recibirEliminar($event: number): void {
    this.palabras = this.palabras.filter((palabra: Ingles) => palabra.id !== $event)
  }

  goBack() {
    this.router.navigate(['/ingles']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NuevaInglesComponent, {
      height: '350px',
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      location.reload();
      if (result) {
        
        //this.recibirPadre(result)
        //this.palabras.push(result)
      }
    });
  }

}
