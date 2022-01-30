import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";
import { Observable } from "rxjs";
import { authModel } from "../models/authModel";

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor{

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var model = this.storage.get('auth_info') as authModel;
    if(model !== undefined){
      return next.handle(req.clone({setHeaders: { 'Authorization': `${model.auth_token_type} ${model.auth_token}`}}));
    }
    else
      return next.handle(req.clone());
  }
}
