import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoInglesComponent } from '../ingles/infraestructure/listado-ingles/listado-ingles.component';
import { EditarEspanolComponent } from './infraestructure/editar-espanol/editar-espanol.component';
import { InicioEspanolComponent } from './infraestructure/inicio-espanol/inicio-espanol.component';
import { ListaEspanolComponent } from './infraestructure/lista-espanol/lista-espanol.component';
import { ListadoEspanolComponent } from './infraestructure/listado-espanol/listado-espanol.component';
import { NuevaEspanolComponent } from './infraestructure/nueva-espanol/nueva-espanol.component';
import { PalabraEspanolComponent } from './infraestructure/palabra-espanol/palabra-espanol.component';

const routes: Routes = [
  {
    path: 'espanol', component: InicioEspanolComponent
  },
  {
    path: 'palabras', component: ListadoEspanolComponent
  },
  {
    path: 'palabraslista', component: ListaEspanolComponent
  },
  {
    path: 'palabra/:p', component: PalabraEspanolComponent
  },
  {
    path: 'editar/:p', component: EditarEspanolComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspanolRoutingModule { }
