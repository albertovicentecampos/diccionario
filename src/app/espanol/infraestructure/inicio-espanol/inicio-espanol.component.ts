import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { EspanolService } from '../../application/services/espanol.service';

import { Espanol, inicializar } from '../../model/espanol';
import { BusquedaEspanolComponent } from '../busqueda-espanol/busqueda-espanol.component';
import { NuevaEspanolComponent } from '../nueva-espanol/nueva-espanol.component';
import { startWith, map} from 'rxjs/operators';


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

  filteredOptions: Observable<string[]>;
  myControl = new FormControl();
  palabras: Espanol[] = [] 
  options: string[] = [];
  
  constructor(
    public dialog: MatDialog,
    private route: Router,
    private formBuilder: FormBuilder,
    private espanolService: EspanolService,
    private matSnackBar: MatSnackBar

    //public dialogRef: MatDialogRef<NuevaEspanolComponent>
  ) { }

  ngOnInit(): void {
    this.espanolService.getPalabras().subscribe(p=>{
      this.palabras = []
      this.palabras = p; 
      for(let i = 0 ; i < this.palabras.length; i++){
        this.options.push(this.palabras[i].palabra)
      }
      this.buscar()
    })
  }

  buscar(): void{
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log(this.options)
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
    console.log()
    if (this.myControl.value == '') {
      valor=true;
      this.mensaje("Escriba una palabra a buscar")
    } else {
      this.espanolService.buscar(this.myControl.value).subscribe(p => {
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
