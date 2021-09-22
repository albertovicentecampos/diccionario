import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { EspanolModule } from './espanol/espanol.module';
import { InglesModule } from './ingles/ingles.module';
import { LateralComponent } from './shared/lateral/lateral.component';
import { InicioEspanolComponent } from './espanol/infraestructure/inicio-espanol/inicio-espanol.component';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { ListadoInglesComponent } from './ingles/infraestructure/listado-ingles/listado-ingles.component';
import { ListadoEspanolComponent } from './espanol/infraestructure/listado-espanol/listado-espanol.component';
import { NuevaEspanolComponent } from './espanol/infraestructure/nueva-espanol/nueva-espanol.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './shared/pipes/search.pipe';
import { BusquedaEspanolComponent } from './espanol/infraestructure/busqueda-espanol/busqueda-espanol.component';
import { ListaEspanolComponent } from './espanol/infraestructure/lista-espanol/lista-espanol.component';
import { PalabraEspanolComponent } from './espanol/infraestructure/palabra-espanol/palabra-espanol.component';
import { EditarEspanolComponent } from './espanol/infraestructure/editar-espanol/editar-espanol.component';
import { ErrorComponent } from './shared/error/error.component';
import { NuevaInglesComponent } from './ingles/infraestructure/nueva-ingles/nueva-ingles.component';
import { BusquedaInglesComponent } from './ingles/infraestructure/busqueda-ingles/busqueda-ingles.component';
import { EditarInglesComponent } from './ingles/infraestructure/editar-ingles/editar-ingles.component';
import { ListaInglesComponent } from './ingles/infraestructure/lista-ingles/lista-ingles.component';
import { PalabraInglesComponent } from './ingles/infraestructure/palabra-ingles/palabra-ingles.component';
import { InicioInglesComponent } from './ingles/infraestructure/inicio-ingles/inicio-ingles.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './shared/inicio/inicio.component';
import { VentanaBorrarComponent } from './shared/ventana-borrar/ventana-borrar.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { environment } from 'src/environments/environment';

//import { MatDialog, MatDialogRef } from '@angular/material/dialog';
//import {MatDialogRef} from '@angular/material/dialog';

const CLIENT_ID = environment.client_Id;

@NgModule({
  declarations: [
    AppComponent,
    LateralComponent,

    InicioEspanolComponent,
    ListadoEspanolComponent,
    NuevaEspanolComponent,
    SearchPipe,
    BusquedaEspanolComponent,
    ListaEspanolComponent,

    PalabraEspanolComponent,
    EditarEspanolComponent,
    ErrorComponent,
    InicioInglesComponent,
    NuevaInglesComponent,
    BusquedaInglesComponent,
    EditarInglesComponent,
    ListaInglesComponent,
    PalabraInglesComponent,
    FooterComponent,
    InicioComponent,
    VentanaBorrarComponent,
    LoginComponent,
     RegisterComponent,
     LoaderComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,

    EspanolModule,
    InglesModule,
    SocialLoginModule

    //MatDialog,
    //MatDialogRef
  ],
  exports: [
    PalabraEspanolComponent
  ],
  providers: [
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              CLIENT_ID
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
