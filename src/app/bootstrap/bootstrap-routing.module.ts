import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapMainComponent } from './bootstrap-main/bootstrap-main.component';

const routes: Routes = [
  { path: '', component: BootstrapMainComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrapRoutingModule { }
