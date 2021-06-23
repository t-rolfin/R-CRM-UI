import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { Lead } from '../models/leadModel';
import { NoteCollectionModel } from '../models/noteCollectionModel';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor(public http: HttpClient, public auth: AuthService) { }

  public getAllLeads() : Observable<Lead[]>
  {
     return this.http.get<Lead[]>(`${env.audience}/leads`)
    .pipe(retry(3), catchError(this.processError));
  }

  public getNotesForLead(leadId: string): Observable<NoteCollectionModel>{
    return this.http.get<NoteCollectionModel>(`${ env.audience }/leads/${ leadId }/notes`)
    .pipe(retry(3), catchError(this.processError));
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
