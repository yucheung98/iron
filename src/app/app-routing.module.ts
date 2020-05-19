import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChargingComponent} from './pages/charging/charging.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'kanban', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'forecast', component: ChargingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
