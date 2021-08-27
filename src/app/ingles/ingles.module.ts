import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InglesRoutingModule } from './ingles-routing.module';
import { NuevaInglesComponent } from './infraestructure/nueva-ingles/nueva-ingles.component';


@NgModule({
  declarations: [
    NuevaInglesComponent
  ],
  imports: [
    CommonModule,
    InglesRoutingModule
  ]
})
export class InglesModule { }
