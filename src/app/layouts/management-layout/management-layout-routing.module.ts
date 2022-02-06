import { UpdateUserComponent } from './../../management-pages/update-user/update-user.component';
import { RegisterUserComponent } from './../../management-pages/register-user/register-user.component';
import { ManagementLayoutComponent } from './management-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', component: ManagementLayoutComponent
},{
  path: 'register', component: RegisterUserComponent,
  data: { breadcrumb: { label: "Register User" } }
},{
  path: 'update', component: UpdateUserComponent,
  data: { breadcrumb: { label: "Update User" } }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementLayoutRoutingModule { }
