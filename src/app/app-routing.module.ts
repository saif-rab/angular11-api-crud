import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestComponent} from './add-rest/add-rest.component';
import {UpdateRestComponent} from './update-rest/update-rest.component';
import {LoginRestComponent} from './login-rest/login-rest.component';
import {RegisterRestComponent} from './register-rest/register-rest.component';
import {ListRestComponent} from './list-rest/list-rest.component';

const routes: Routes = [
  {
    component:AddRestComponent,
    path:'add'
  },
  {
    component:UpdateRestComponent,
    path:'update'
  },
  {
    component:UpdateRestComponent,
    path:'update/:id'
  },
  {
    component:LoginRestComponent,
    path:'login'
  },
  {
    component:RegisterRestComponent,
    path:'register'
  },
  {
    component:ListRestComponent,
    path:'list'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
