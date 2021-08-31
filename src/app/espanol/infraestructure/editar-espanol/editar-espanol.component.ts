import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EspanolService } from '../../application/services/espanol.service';
import { Espanol, inicializar } from '../../model/espanol';

@Component({
  selector: 'app-editar-espanol',
  templateUrl: './editar-espanol.component.html',
  styleUrls: ['./editar-espanol.component.scss']
})
export class EditarEspanolComponent implements OnInit {

  title = "EDITAR PALABRA: "
  registerForm = this.formBuilder.group({
    palabra: [''],
    descripcion: [''],
    fechaModificacion: [new Date().getDate()]
  })
  palabra: string
  p: Espanol = inicializar();

  constructor(private formBuilder: FormBuilder, private router: ActivatedRoute, private route: Router, private espanolService: EspanolService) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      pararms => {
        this.palabra = pararms['p']
        console.log(this.palabra)
        this.title+=" "+this.palabra
      }
    )

    this.espanolService.buscar(this.palabra).subscribe(
      p => {
        this.registerForm.patchValue(p)
      }

    )
  }

  guardar(): void {
    this.p = this.registerForm.value;
    console.log(this.p)
    this.p.palabra = this.palabra
    this.espanolService.editar(this.registerForm.value).subscribe(c => {
      this.p = c;
      this.route.navigate(["/palabraslista"])
    })
  }



}
