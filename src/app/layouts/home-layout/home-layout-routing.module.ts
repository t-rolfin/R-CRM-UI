import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/home-pages/login/login.component';
import { PresentationComponent } from 'src/app/pages/presentation/presentation.component';

const routes: Routes = [
  {
    path: '',
    component: PresentationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLayoutRoutingModule { }
