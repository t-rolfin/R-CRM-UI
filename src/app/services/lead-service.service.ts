import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from './snackbar-service.service';
import { BaseService } from './base-service.service';
import { LoaderService } from './loader-service.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { leadCreationModel } from '../models/leadCreationModel';
import { Lead } from '../models/leadModel';

@Injectable({
  providedIn: 'root'
})
export class LeadService extends BaseService {

  constructor(
    public http: HttpClient,
    public notifications: SnackBarService,
    ) {
      super(notifications)
  }

  public getAllLeads() : Observable<Lead[]>
  {
     return this.http.get<Lead[]>(`${env.apiUrl}/leads`)
    .pipe(catchError(x => super.processError(x)));
  }

  public createLead(leadModel: leadCreationModel){
      this.http.post(`${env.apiUrl}/leads/create`, leadModel)
      .pipe(catchError(x => super.processError(x)))
      .subscribe(x=> console.log(x));
  }
}
