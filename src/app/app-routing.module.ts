import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PresentationComponent } from './pages/presentation/presentation.component';

const routes: Routes = [
  { path: '', component: PresentationComponent },
  {
    path: 'dashboard', component: AuthLayoutComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
