import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChargingComponent} from './pages/charging/charging.component';
import {EcoForecastComponent} from './pages/eco-forecast/eco-forecast.component';
import {EconomicsComponent} from './pages/economics/economics.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/icon-kanban' },
  { path: 'icon-kanban', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'icon-forecast', component: ChargingComponent },
  { path: 'eco-kanban', component: EconomicsComponent },
  { path: 'eco-forecast', component: EcoForecastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
