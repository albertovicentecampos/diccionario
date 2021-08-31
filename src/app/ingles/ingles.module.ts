import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InglesRoutingModule } from './ingles-routing.module';
import { NuevaInglesComponent } from './infraestructure/nueva-ingles/nueva-ingles.component';
import { BusquedaInglesComponent } from './infraestructure/busqueda-ingles/busqueda-ingles.component';
import { EditarInglesComponent } from './infraestructure/editar-ingles/editar-ingles.component';
import { ListaInglesComponent } from './infraestructure/lista-ingles/lista-ingles.component';
import { PalabraInglesComponent } from './infraestructure/palabra-ingles/palabra-ingles.component';


@NgModule({
  declarations: [
    NuevaInglesComponent,
    BusquedaInglesComponent,
    EditarInglesComponent,
    ListaInglesComponent,
    PalabraInglesComponent
  ],
  imports: [
    CommonModule,
    InglesRoutingModule
  ]
})
export class InglesModule { }
