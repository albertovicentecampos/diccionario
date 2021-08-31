
import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ing } from 'src/app/espanol/model/espanol';
import { InglesService } from '../../application/services/ingles.service';


import { Ingles, inicializar } from '../../model/ingles';

@Component({
  selector: 'app-palabra-ingles',
  templateUrl: './palabra-ingles.component.html',
  styleUrls: ['./palabra-ingles.component.scss']
})
export class PalabraInglesComponent implements OnInit {

 
  constructor(private inglesService: InglesService, 
    private activeRouter: ActivatedRoute, 
    public  route: Router, 
    public dialog: MatDialog) { }

  @Input() palabra: Ingles = inicializar();
  @Output() borrar: EventEmitter<number> = new EventEmitter();

  p: string;
  palabraEsp: string; 
  //palabrasIng: Ing[] = []
  valor: boolean = false;

  ngOnInit(): void {
    this.activeRouter.params.subscribe((params: Params) => {
      this.inglesService.buscar(params.p).subscribe(p => {
        this.palabra = p;
        this.palabraEsp = this.palabra.palabraEspanol
      })
      this.palabraEsp = this.palabra.palabraEspanol
    });

  }

  editar(): void {
    this.route.navigate(['ingles/editar', this.palabra.palabra])
  }

  eliminar(): void {
    this.inglesService.delete(this.palabra.palabra).subscribe()
    this.borrar.emit(this.palabra.id)

    //this.route.navigate(['/palabraslista'])

  }

}
