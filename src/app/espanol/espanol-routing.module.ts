import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoInglesComponent } from '../ingles/infraestructure/listado-ingles/listado-ingles.component';
import { InicioEspanolComponent } from './infraestructure/inicio-espanol/inicio-espanol.component';
import { ListadoEspanolComponent } from './infraestructure/listado-espanol/listado-espanol.component';

const routes: Routes = [
  {
    path: 'espanol', component: InicioEspanolComponent
  },
  {
    path: 'palabras', component: ListadoEspanolComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspanolRoutingModule { }
