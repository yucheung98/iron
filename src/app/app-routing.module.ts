import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChargingComponent} from './pages/charging/charging.component';
import {EcoForecastComponent} from './pages/eco-forecast/eco-forecast.component';
import {EconomicsComponent} from './pages/economics/economics.component';
import {ElectricComponent} from './pages/electric/electric.component';
import {EnergyComponent} from './pages/energy/energy.component';
import {EcoRelationComponent} from './pages/eco-relation/eco-relation.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/icon-kanban' },
  { path: 'icon-kanban', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'icon-forecast', component: ChargingComponent },
  { path: 'eco-GDP', component: EconomicsComponent },
  { path: 'eco-electric', component: ElectricComponent },
  { path: 'eco-energy ', component: EnergyComponent },
  { path: 'eco-forecast', component: EcoForecastComponent },
  { path: 'eco-forecast-relation', component: EcoRelationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
