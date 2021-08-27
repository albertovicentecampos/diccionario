import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EspanolService } from '../../application/services/espanol.service';
import { EspanolModule } from '../../espanol.module';

@Component({
  selector: 'app-nueva-espanol',
  templateUrl: './nueva-espanol.component.html',
  styleUrls: ['./nueva-espanol.component.scss']
})
export class NuevaEspanolComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NuevaEspanolComponent>,
    public espanolService: EspanolService) { }
  
  title: string = "NUEVA PALABRA"

  registerForm = this.formBuilder.group({
    palabra: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    descripcion: ['']
  })

  ngOnInit(): void {
    //console.log(this.espanolService.getPersona());
  }

  guardar(): void { 

  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
