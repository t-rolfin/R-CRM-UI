import { Component } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public breadCrumbService: BreadcrumbService,
    translate: TranslateService){
      translate.setDefaultLang('ro');
      translate.use('ro');
    }

  title = 'rcrmui';
}
