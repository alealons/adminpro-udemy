import { Routes, RouterModule } from "@angular/router";

//COMPONENTES
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
        {path: 'progress', component: ProgressComponent, data: { titulo: 'Progreso'} },
        {path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas'}  },
        {path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'}  },
        {path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'}  },
        {path: 'rxjs', component: RxjsComponent, data: { titulo: 'Observables y RXJS'}  },
        {path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Account Settings'}  },
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
