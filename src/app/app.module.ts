import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import zh from '@angular/common/locales/zh';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {WelcomeModule} from './pages/welcome/welcome.module';
import {NgxEchartsModule} from 'ngx-echarts';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { ChargingComponent } from './pages/charging/charging.component';
import { EconomicsComponent } from './pages/economics/economics.component';
import { EcoForecastComponent } from './pages/eco-forecast/eco-forecast.component';
import { ElectricComponent } from './pages/electric/electric.component';
import { EnergyComponent } from './pages/energy/energy.component';
import { EcoRelationComponent } from './pages/eco-relation/eco-relation.component';
import { DemandComponent } from './pages/demand/demand.component';
import { SupplyComponent } from './pages/supply/supply.component';
import { Forecast1Component } from './pages/forecast1/forecast1.component';
import { Forecast2Component } from './pages/forecast2/forecast2.component';



registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChargingComponent,
    EconomicsComponent,
    EcoForecastComponent,
    ElectricComponent,
    EnergyComponent,
    EcoRelationComponent,
    DemandComponent,
    SupplyComponent,
    Forecast1Component,
    Forecast2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    WelcomeModule,
    NgxEchartsModule,
    ChartsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent]
})
export class AppModule { }
