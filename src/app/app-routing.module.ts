import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/AuthGuard';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

const routes: Routes = [
  { path: '', component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/home-layout/home-layout-routing.module').then(m => m.HomeLayoutRoutingModule)
      }
    ]
  },
  {
    path: 'dashboard', component: AuthLayoutComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule),
        data: { breadcrumb: { label: 'Dashboard ' }  }
      }
    ]
  },
  {
    path: 'management', component: AuthLayoutComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/management-layout/management-layout.module').then(m => m.ManagementLayoutModule),
        data: { breadcrumb: { label: 'Management' } }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
