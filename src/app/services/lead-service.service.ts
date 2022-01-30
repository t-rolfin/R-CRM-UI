import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { leadCreationModel } from '../models/leadCreationModel';
import { Lead } from '../models/leadModel';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor(public http: HttpClient) { }

  public getAllLeads() : Observable<Lead[]>
  {
     return this.http.get<Lead[]>(`${env.apiUrl}/leads`)
    .pipe(retry(3), catchError(this.processError));
  }

  public createLead(leadModel: leadCreationModel){
    console.log(`${env.apiUrl}/leads/create`);
      this.http.post(`${env.apiUrl}/leads/create`, leadModel)
      .subscribe(x=> console.log(x));
  }

  processError(err: any) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
 }

}
