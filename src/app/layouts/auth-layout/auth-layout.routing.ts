import { Routes } from '@angular/router'

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { LeadsComponent } from '../../pages/leads/leads.component';
import { StatisticsComponent } from '../../pages/statistics/statistics.component';
import { LeadCreationComponent } from '../../pages/lead-creation/lead-creation.component';
import { LeadDetailsComponent } from '../../pages/lead-details/lead-details.component';

export const AuthLayoutRoutes: Routes =
[
  { path: '', component: DashboardComponent },
  { path: 'leads', component: LeadsComponent, data: { breadcrumb: { label: 'Leads' } }},
  { path: 'createlead', component: LeadCreationComponent, data: { breadcrumb: { label: 'Create Lead' } } },
  { path: 'leads/:id', component: LeadDetailsComponent},
  { path: 'statistics', component: StatisticsComponent, data: { breadcrumb: { label: 'Statistics' } } }
]
