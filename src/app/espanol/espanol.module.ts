import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspanolRoutingModule } from './espanol-routing.module';
import { BusquedaEspanolComponent } from './infraestructure/busqueda-espanol/busqueda-espanol.component';
import { ListaEspanolComponent } from './infraestructure/lista-espanol/lista-espanol.component';
import { EditarEspanolComponent } from './infraestructure/editar-espanol/editar-espanol.component';



@NgModule({
  
  imports: [
    CommonModule,
    EspanolRoutingModule,

  ],
  
  declarations: [
    

  

  ]
})
export class EspanolModule { }
