import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonTypesExampleComponent } from './button-types-example/button-types-example.component';
import { MaterialMainComponent } from './material-main/material-main.component';

const routes: Routes = [
  { path: '', component: MaterialMainComponent},
  { path: 'material-button-types', component: ButtonTypesExampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
