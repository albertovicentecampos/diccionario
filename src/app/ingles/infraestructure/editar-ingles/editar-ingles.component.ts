import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InglesService } from '../../application/services/ingles.service';
import { Ingles, inicializar } from '../../model/ingles';

@Component({
  selector: 'app-editar-ingles',
  templateUrl: './editar-ingles.component.html',
  styleUrls: ['./editar-ingles.component.scss']
})
export class EditarInglesComponent implements OnInit {


  title = "EDITAR PALABRA: "
  registerForm = this.formBuilder.group({
    palabra: [''],
    palabraEspanol: [''],
    //fechaModificacion: [new Date().getDate()]
  })
  palabra: string
  p: Ingles = inicializar();

  constructor(private formBuilder: FormBuilder, 
    private router: ActivatedRoute, 
    private route: Router, 
    private inglesService: InglesService) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      pararms => {
        this.palabra = pararms['p']
        console.log(this.palabra)
        this.title+=" "+this.palabra
      }
    )

    this.inglesService.buscar(this.palabra).subscribe(
      p => {
        this.registerForm.patchValue(p)
      }

    )
  }

  guardar(): void {
    this.p = this.registerForm.value;
    console.log(this.p)
    this.p.palabra = this.palabra
    this.inglesService.editar(this.registerForm.value).subscribe(c => {
      this.p = c;
      this.route.navigate(["ingles/palabra",this.p.palabra])
    })
  }

  goBack() {
    this.route.navigate(['ingles/palabraslista']);
    }

}
