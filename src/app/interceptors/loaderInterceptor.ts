import { LoaderService } from './../services/loader-service.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";
import { Observable } from "rxjs";
import { authModel } from "../models/authModel";
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor{

  constructor(
    private loaderService: LoaderService
  ){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();

    return next.handle(req)
      .pipe(finalize(
        () => { this.loaderService.hide(); }
      ));
  }
}
