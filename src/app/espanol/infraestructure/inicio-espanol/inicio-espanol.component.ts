import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';

import { Espanol, inicializar } from '../../model/espanol';
import { BusquedaEspanolComponent } from '../busqueda-espanol/busqueda-espanol.component';
import { NuevaEspanolComponent } from '../nueva-espanol/nueva-espanol.component';

@Component({
  selector: 'app-inicio-espanol',
  templateUrl: './inicio-espanol.component.html',
  styleUrls: ['./inicio-espanol.component.scss']
})
export class InicioEspanolComponent implements OnInit {
  palabra: Espanol = inicializar();

  constructor(
     public dialog: MatDialog,
     private route: Router
     //public dialogRef: MatDialogRef<NuevaEspanolComponent>
    ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NuevaEspanolComponent, {
      height: '300px',
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //this.palabras.push(result)
      }
    });
  }

  // recibirPadre($event: Espanol){
  //   this.palabra = $event;
  //   this.data = this.palabra 
  //   this.dialogRef.close(this.palabra);
  // }

  lista(){
    this.route.navigate(['/palabras'])
  }

  busqueda(){
    const dialogRef = this.dialog.open(BusquedaEspanolComponent, {
      height: '300px',
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //this.palabras.push(result)
      }
    });
  }
}
