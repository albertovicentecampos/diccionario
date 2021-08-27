import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nueva-espanol',
  templateUrl: './nueva-espanol.component.html',
  styleUrls: ['./nueva-espanol.component.scss']
})
export class NuevaEspanolComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NuevaEspanolComponent>) { }
  
  title: string = "NUEVA PALABRA"

  registerForm = this.formBuilder.group({
    palabra: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    descripcion: ['']
  })

  ngOnInit(): void {
  }

  guardar(): void { 

  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
