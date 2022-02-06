import { SnackBarService } from './snackbar-service.service';
import { BaseService } from './base-service.service';
import { catchError } from 'rxjs/operators';
import { LoaderService } from './loader-service.service';
import { HttpClient } from '@angular/common/http';
import { UsersModel } from './../models/usersModels';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManagementService extends BaseService{
  constructor(
    private httpClient: HttpClient,
    private loader: LoaderService,
    public notification: SnackBarService
  ){
    super(notification);
  }

   GetUsers(): Observable<UsersModel>{
    return this.httpClient.get<UsersModel>(`${this.baseUrl}/management/getUsers`)
      .pipe(catchError(x => this.processError(x)));
  }

}
