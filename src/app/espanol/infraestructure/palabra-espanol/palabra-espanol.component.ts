import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { EspanolService } from '../../application/services/espanol.service';
import { EspanolModule } from '../../espanol.module';
import { Espanol, Ing, inicializar } from '../../model/espanol';

import { ActivatedRoute, Params, Router } from "@angular/router"
import { NuevaEspanolComponent } from '../nueva-espanol/nueva-espanol.component';
import { MatDialog } from '@angular/material/dialog';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { VentanaBorrarComponent } from 'src/app/shared/ventana-borrar/ventana-borrar.component';

@Component({
  selector: 'app-palabra-espanol',
  templateUrl: './palabra-espanol.component.html',
  styleUrls: ['./palabra-espanol.component.scss']
})
export class PalabraEspanolComponent implements OnInit {

  constructor(private espanolService: EspanolService, private activeRouter: ActivatedRoute, public  route: Router, public dialog: MatDialog) { }

  @Input() palabra: Espanol = inicializar();
  @Output() borrar: EventEmitter<number> = new EventEmitter();
  

  p: string;
  palabrasIng: Ing[] = []
  valor: boolean = false;

  ngOnInit(): void {
    this.activeRouter.params.subscribe((params: Params) => {
      this.espanolService.buscar(params.p).subscribe(p => {
        this.palabra = p;
        this.palabrasIng = this.palabra.palabrasIngles
      })
      this.palabrasIng = this.palabra.palabrasIngles
    });

  }

  editar(): void {
    this.route.navigate(['espanol/editar', this.palabra.palabra])
  }

  eliminar(): void {

    //nuevo
    const dialogRef = this.dialog.open(VentanaBorrarComponent, {
      height: '150px',
      width: '250px',
      data: ""
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.espanolService.delete(this.palabra.palabra).subscribe()
        this.borrar.emit(this.palabra.id)
      }
    });


    

    //this.route.navigate(['/palabraslista'])

  }

  palabraUrl(palabra: string): void {
    this.route.navigate(['espanol/palabra/'+palabra])
  }

  palabraIngles(palabra: string): void {
    this.route.navigate(['ingles/palabra/'+palabra])
  }


}
