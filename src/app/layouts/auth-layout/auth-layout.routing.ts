import { Routes } from '@angular/router'

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { LeadsComponent } from '../../pages/leads/leads.component';
import { StatisticsComponent } from '../../pages/statistics/statistics.component';

export const AuthLayoutRoutes: Routes =
[
  { path: '', component: DashboardComponent },
  { path: 'leads', component: LeadsComponent },
  { path: 'statistics', component: StatisticsComponent }
]
