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
import {P1Component} from './pages2/p1/p1.component';
import {P3Component} from './pages2/p3/p3.component';
import {P2Component} from './pages2/p2/p2.component';
import {P4Component} from './pages2/p4/p4.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/p1' },
  // { path: 'preface', component: PrefaceComponent },
  // { path: 'demand', component: DemandComponent },
  // { path: 'supply', component: SupplyComponent },
  // { path: 'forecast1', component: Forecast1Component },
  // { path: 'forecast2', component: Forecast2Component },
  // { path: 'eco-GDP', component: EconomicsComponent },
  // { path: 'eco-electric', component: ElectricComponent },
  // { path: 'eco-energy ', component: EnergyComponent },
  // { path: 'eco-forecast', component: EcoForecastComponent },
  // { path: 'eco-forecast-relation', component: EcoRelationComponent },
  { path: 'p1', component: P1Component },
  { path: 'p2', component: P2Component },
  { path: 'p3', component: P3Component },
  { path: 'p4', component: P4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
