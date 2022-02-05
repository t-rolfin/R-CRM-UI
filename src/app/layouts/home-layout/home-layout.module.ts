import { AuthLayoutModule } from './../auth-layout/auth-layout.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from 'src/app/home-pages/login/login.component';
import { PresentationComponent } from 'src/app/pages/presentation/presentation.component';
import { HomeLayoutRoutingModule } from './home-layout-routing.module';
import { HomeLayoutComponent } from './home-layout.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    LoginComponent,
    HomeLayoutComponent,
    PresentationComponent
  ],
  imports: [
    HomeLayoutRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    TranslateModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    AuthLayoutModule,
    MatDividerModule
  ]
})
export class HomeLayoutModule { }
