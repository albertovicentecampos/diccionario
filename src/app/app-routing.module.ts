import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EspanolModule } from './espanol/espanol.module';
import { InicioEspanolComponent } from './espanol/infraestructure/inicio-espanol/inicio-espanol.component';
import { ListadoEspanolComponent } from './espanol/infraestructure/listado-espanol/listado-espanol.component';
import { NuevaEspanolComponent } from './espanol/infraestructure/nueva-espanol/nueva-espanol.component';
import { InicioInglesComponent } from './ingles/infraestructure/inicio-ingles/inicio-ingles.component';
import { ListadoInglesComponent } from './ingles/infraestructure/listado-ingles/listado-ingles.component';
import { InglesModule } from './ingles/ingles.module';

//import { NuevaInglesComponent } from './ingles/infraestructure/nueva-ingles/nueva-ingles.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => EspanolModule
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
