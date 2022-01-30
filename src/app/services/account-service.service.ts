import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Observable, throwError } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { authModel } from '../models/authModel';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    public http: HttpClient,
    private router: Router,
    @Inject(LOCAL_STORAGE) public storage: StorageService) { }

  public async Authenticate(userName: string, password: string) : Promise<authModel>{
    let response: authModel = new authModel();

    await new Promise((resolve, reject) => {
      this.http.post(`${env.apiUrl}/api/account/login`, {userName, password}, {observe: 'response'})
        .subscribe(data =>{
          if(data.status == 200)
          {
            this.storage.set('auth_info', data.body as authModel);
            this.router.navigateByUrl("/dashboard");
          }else{

          }
        });
    })

    return response;
  }

  public LogOut(){
    this.storage.remove('auth_info');
    this.router.navigateByUrl("/")
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
