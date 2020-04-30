import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgZorroAntdModule} from "ng-zorro-antd";


@NgModule({
  imports: [WelcomeRoutingModule, NgxEchartsModule, NgZorroAntdModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
