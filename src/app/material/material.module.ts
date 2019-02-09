import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { ButtonTypesExampleComponent } from './button-types-example/button-types-example.component';
import { MaterialMainComponent } from './material-main/material-main.component';

@NgModule({
  declarations: [
    ButtonTypesExampleComponent,
    MaterialMainComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
