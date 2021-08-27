import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioInglesComponent } from './infraestructure/inicio-ingles/inicio-ingles.component';
import { ListadoInglesComponent } from './infraestructure/listado-ingles/listado-ingles.component';

const routes: Routes = [
  {
    path: 'ingles', component: InicioInglesComponent
  },
  {
    path: 'palabras', component: ListadoInglesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InglesRoutingModule { }
