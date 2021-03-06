import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EspanolService } from 'src/app/espanol/application/services/espanol.service';
import { InglesService } from '../../application/services/ingles.service';
import { Ingles, inicializar } from '../../model/ingles';

@Component({
  selector: 'app-nueva-ingles',
  templateUrl: './nueva-ingles.component.html',
  styleUrls: ['./nueva-ingles.component.scss']
})
export class NuevaInglesComponent implements OnInit {


  title: string = "NUEVA PALABRA"
  palabra: Ingles = inicializar();
  palabras: string[] = []
  palabrasEspanol: string[] = []

  registerForm = this.formBuilder.group({
    palabra: ['', [Validators.required]],
    palabraEspanol: ['', [Validators.required]],
    //fechaAlta: [new Date().getDate()]
    //fechaModificacion: [null]
  })

  //@Output() palabraInsertada: EventEmitter<Espanol> = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NuevaInglesComponent>,
    public inglesService: InglesService,
    public route: Router,
    private matSnackBar: MatSnackBar,
    private espanolService: EspanolService) { }


  ngOnInit(): void {
    
  }

  guardar(): void {

  }

  insertar(): void {
    if (this.registerForm.invalid) {
      return;
    } else {
        this.palabra = this.registerForm.value;
  
        this.inglesService.getPalabras().subscribe(p=>{
          for(let i in p){
            this.palabras.push(p[i].palabra)
          }
          if(this.palabras.includes(this.palabra.palabra)){
            alert("La palabra ya existe en el diccionario")
          }
        })

        this.espanolService.getPalabras().subscribe(p=>{
          for(let i in p){
            this.palabrasEspanol.push(p[i].palabra)
          }
          if(!this.palabrasEspanol.includes(this.palabra.palabraEspanol)){
            alert("La palabra en espa??ol no existe en la base de datos. Se debe de crear primero")
          }
        })


  
      this.palabra = this.registerForm.value;
      this.inglesService.insertar(this.palabra).subscribe(c => {
        this.palabra = c;
        console.log("insertada")
        this.dialogRef.close();
        this.route.navigate(["ingles/palabraslista"])
        //this.palabraInsertada.emit(this.palabra)
      })
    }
  }
  

  cancelar(): void {
    this.dialogRef.close();
  }

  campoValido(campo: string ){
      return this.registerForm.controls[campo].errors && this.registerForm.controls[campo].touched;
  }

  mensaje(mensaje: string) {
    this.matSnackBar.open(mensaje, " ", {
      duration: 3000
    })
  }

}
