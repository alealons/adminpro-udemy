import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

//MODULOS
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

// COMPONENTES
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    AccountSettingsComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule
  ],
  exports: [
    //AQUI SE COLOCA LOS COMPONENTES QUE SE VAN A USAR FUERA DE ESTE MODULO
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ]
})
export class PagesModule { }
