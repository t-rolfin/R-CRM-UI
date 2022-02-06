import { FormType } from './enums/formType.enum';
import { BaseService } from './services/base-service.service';
import { LoaderInterceptor } from './interceptors/loaderInterceptor';
import { LoaderService } from './services/loader-service.service';
import { ManagementService } from './services/management-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BreadcrumbService } from 'xng-breadcrumb';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeLayoutModule } from './layouts/home-layout/home-layout.module';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { AuthTokenInterceptor } from './interceptors/authTokenInterceptor';
import { AuthGuard } from './guards/AuthGuard';
import { SnackBarService } from './services/snackbar-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    HomeLayoutModule,
    AuthLayoutModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports:[
    TranslateModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    AuthGuard,
    BreadcrumbService,
    ManagementService,
    LoaderService,
    SnackBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
