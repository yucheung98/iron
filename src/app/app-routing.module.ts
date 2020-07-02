import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChargingComponent} from './pages/charging/charging.component';
import {EcoForecastComponent} from './pages/eco-forecast/eco-forecast.component';
import {EconomicsComponent} from './pages/economics/economics.component';
import {ElectricComponent} from './pages/electric/electric.component';
import {EnergyComponent} from './pages/energy/energy.component';
import {EcoRelationComponent} from './pages/eco-relation/eco-relation.component';
import {DemandComponent} from './pages/demand/demand.component';
import {SupplyComponent} from './pages/supply/supply.component';
import {Forecast1Component} from './pages/forecast1/forecast1.component';
import {Forecast2Component} from './pages/forecast2/forecast2.component';
import {PrefaceComponent} from './pages/preface/preface.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/preface' },
  { path: 'preface', component: PrefaceComponent },
  { path: 'demand', component: DemandComponent },
  { path: 'supply', component: SupplyComponent },
  { path: 'forecast1', component: Forecast1Component },
  { path: 'forecast2', component: Forecast2Component },
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
