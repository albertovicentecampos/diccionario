import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { EspanolService } from '../../application/services/espanol.service';

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
  pal: Espanol;
  registerForm = this.formBuilder.group({
    buscar: ['']
  })
  constructor(
    public dialog: MatDialog,
    private route: Router,
    private formBuilder: FormBuilder,
    private espanolService: EspanolService,
    private matSnackBar: MatSnackBar

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

  lista() {
    this.route.navigate(['/palabras'])
  }

  listaa() {
    this.route.navigate(['espanol/palabraslista'])
  }

  busqueda() {
    let valor = false;
    console.log(this.registerForm.value.buscar)

    if (this.registerForm.value.buscar == '') {
      valor=true;
      this.mensaje("Escriba una palabra a buscar")
    } else {
      this.espanolService.buscar(this.registerForm.value.buscar).subscribe(p => {
        this.pal = p;
        valor = true; 
        this.mensaje("Palabra encontrada")
        console.log("RESULTADO: " + p)
        this.route.navigate(['espanol/palabra', this.pal.palabra])
      })
      console.log(this.pal)
      if (!valor) {
          this.mensaje("Palabra no encontrada")
        }
    }

  }

  mensaje(mensaje: string) {
    this.matSnackBar.open(mensaje, " ", {
      duration: 3000
    })
  }
}
