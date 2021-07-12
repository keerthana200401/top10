import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ViewthingsComponent } from './viewthings/viewthings.component';

const routes: Routes = [{ path: '', component: AdminComponent ,children:[
  {path:'viewthings',component:ViewthingsComponent,children:[
    
  ]}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
