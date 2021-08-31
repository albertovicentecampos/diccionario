import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { InglesService } from '../../application/services/ingles.service';
import { Ingles, inicializar } from '../../model/ingles';
import { NuevaInglesComponent } from '../nueva-ingles/nueva-ingles.component';

@Component({
  selector: 'app-inicio-ingles',
  templateUrl: './inicio-ingles.component.html',
  styleUrls: ['./inicio-ingles.component.scss']
})
export class InicioInglesComponent implements OnInit {

  palabra: Ingles = inicializar();
  pal: Ingles;
  registerForm = this.formBuilder.group({
    buscar: ['']
  })
  constructor(
    public dialog: MatDialog,
    private route: Router,
    private formBuilder: FormBuilder,
    private inglesService: InglesService,
    private matSnackBar: MatSnackBar

    //public dialogRef: MatDialogRef<NuevaEspanolComponent>
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NuevaInglesComponent, {
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
    this.route.navigate(['ingles/palabraslista'])
  }

  busqueda() {
    let valor = false;
    console.log(this.registerForm.value.buscar)

    if (this.registerForm.value.buscar == '') {
      valor=true;
      this.mensaje("Escriba una palabra a buscar")
    } else {
      this.inglesService.buscar(this.registerForm.value.buscar).subscribe(p => {
        this.pal = p;
        valor = true; 
        this.mensaje("Palabra encontrada")
        console.log("RESULTADO: " + p)
        this.route.navigate(['ingles/palabra', this.pal.palabra])
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
