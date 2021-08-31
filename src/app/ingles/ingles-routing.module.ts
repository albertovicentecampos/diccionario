import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaInglesComponent } from './infraestructure/busqueda-ingles/busqueda-ingles.component';
import { EditarInglesComponent } from './infraestructure/editar-ingles/editar-ingles.component';
import { InicioInglesComponent } from './infraestructure/inicio-ingles/inicio-ingles.component';
import { ListaInglesComponent } from './infraestructure/lista-ingles/lista-ingles.component';
import { ListadoInglesComponent } from './infraestructure/listado-ingles/listado-ingles.component';

const routes: Routes = [
  {
    path: 'ingles', component: InicioInglesComponent
  },
  {
    path: 'ingles/palabras', component: ListadoInglesComponent
  },
  {
    path: 'ingles/palabraslista', component: ListaInglesComponent
  },
  {
    path: 'ingles/palabra/:p', component: BusquedaInglesComponent
  },
  {
    path: 'ingles/editar/:p', component: EditarInglesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InglesRoutingModule { }
