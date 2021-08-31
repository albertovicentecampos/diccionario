import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EspanolService } from '../../application/services/espanol.service';
import { Espanol } from '../../model/espanol';

@Component({
  selector: 'app-busqueda-espanol',
  templateUrl: './busqueda-espanol.component.html',
  styleUrls: ['./busqueda-espanol.component.scss']
})
export class BusquedaEspanolComponent implements OnInit {

  constructor(private palabraService: EspanolService, private route: Router) { }

  ngOnInit(): void {
  }

  goBack() {
    this.route.navigate(['/espanol']);
  }
}
