import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoComponent} from './demo.component';
import {DemoRoutingModule} from './demo-routing.module';


@NgModule({
  declarations: [
    DemoComponent
  ],
  exports: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ],
})
export class DemoModule {
}
