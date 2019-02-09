import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BootstrapMainComponent } from './bootstrap-main/bootstrap-main.component';

@NgModule({
  declarations: [BootstrapMainComponent],
  imports: [
    CommonModule,
    BootstrapRoutingModule
  ]
})
export class BootstrapModule { }
