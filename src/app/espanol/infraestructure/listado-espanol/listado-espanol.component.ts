import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-espanol',
  templateUrl: './listado-espanol.component.html',
  styleUrls: ['./listado-espanol.component.scss']
})
export class ListadoEspanolComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor() { }

  ngOnInit(): void {
  }

}
