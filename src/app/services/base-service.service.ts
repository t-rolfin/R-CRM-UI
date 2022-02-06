import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from './snackbar-service.service';
import { throwError } from "rxjs";
import { environment } from 'src/environments/environment';

export class BaseService {
  baseUrl: string;

  constructor(
    public notifications: SnackBarService
    ){
      this.baseUrl = environment['apiUrl'];
    }

  processError(err: any) {
    let message = '';

    if(err.status === 0)
    {
      this.notifications.showServerError();
    }

    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }

    return throwError(message);
 }

}
