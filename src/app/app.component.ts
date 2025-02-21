import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'DJS';

  
  constructor(private translateService : TranslateService){

    this.translateService.setDefaultLang('fr');
    this.translateService.use(localStorage.getItem('language')||'fr');
    
  }

  
}
