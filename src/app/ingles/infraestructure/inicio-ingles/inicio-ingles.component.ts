import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AnimationService } from 'src/app/shared/services/animation/animation.service';
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

  filteredOptions: Observable<string[]>;
  myControl = new FormControl();
  palabras: Ingles[] = [] 
  options: string[] = [];

  constructor(
    public dialog: MatDialog,
    private route: Router,
    private formBuilder: FormBuilder,
    private inglesService: InglesService,
    private matSnackBar: MatSnackBar,
    private animationService: AnimationService
    //public dialogRef: MatDialogRef<NuevaEspanolComponent>
  ) { }

  ngOnInit(): void {
    this.inglesService.getPalabras().subscribe(p=>{
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
    const dialogRef = this.dialog.open(NuevaInglesComponent, {
      height: '350px',
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
    this.animationService.realizarAnimacion()
    this.route.navigate(['/palabras'])
  }

  listaa() {
    this.route.navigate(['ingles/palabraslista'])
  }

  busqueda() {
    let valor = false;
    console.log(this.registerForm.value.buscar)

    if (this.myControl.value == '') {
      //valor=true;
      this.mensaje("Escriba una palabra a buscar")
    } else {
      this.inglesService.buscar(this.myControl.value).subscribe(p => {
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
