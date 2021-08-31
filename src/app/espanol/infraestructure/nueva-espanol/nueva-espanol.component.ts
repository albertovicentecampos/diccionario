import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { EspanolService } from '../../application/services/espanol.service';
import { Espanol, inicializar } from '../../model/espanol';

@Component({
  selector: 'app-nueva-espanol',
  templateUrl: './nueva-espanol.component.html',
  styleUrls: ['./nueva-espanol.component.scss']
})
export class NuevaEspanolComponent implements OnInit {

  title: string = "NUEVA PALABRA"
  palabra: Espanol = inicializar();

  registerForm = this.formBuilder.group({
    palabra: ['', [Validators.required]],
    descripcion: [''],
    fechaAlta: [new Date().getDate()]
    //fechaModificacion: [null]
  })

  //@Output() palabraInsertada: EventEmitter<Espanol> = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NuevaEspanolComponent>,
    public espanolService: EspanolService,
    public route: Router) { }


  ngOnInit(): void {
    //console.log(this.espanolService.getPersona());
  }

  guardar(): void {

  }

  insertar(): void {

    if (this.registerForm.invalid) {
      return;
    } else {
      this.palabra = this.registerForm.value;
      this.espanolService.insertar(this.palabra).subscribe(c => {
        this.palabra = c;
        console.log("insertada")
        this.dialogRef.close();
        this.route.navigate(["espanol/palabraslista"])
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

}
