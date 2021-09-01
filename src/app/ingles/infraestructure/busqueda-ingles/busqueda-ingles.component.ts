import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InglesService } from '../../application/services/ingles.service';
import { Ingles } from '../../model/ingles';

@Component({
  selector: 'app-busqueda-ingles',
  templateUrl: './busqueda-ingles.component.html',
  styleUrls: ['./busqueda-ingles.component.scss']
})
export class BusquedaInglesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goBack() {
    this.route.navigate(['/ingles']);
  }

}
