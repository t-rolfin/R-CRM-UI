import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { PresentationComponent } from './pages/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PresentationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AuthModule.forRoot({
      clientId: env.clientId,
      domain: env.domain,
      redirectUri: env.redirectUrl,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
