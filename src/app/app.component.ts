import { Component } from '@angular/core';
import { NavService } from './services/nav.service';
import { Router, NavigationStart } from "@angular/router";

import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
          '[class.gradient-back]': 'true', 
          '[class.navActive]': 'navActive'
  }
})
export class AppComponent {
  navActive = false;

  constructor(private navService: NavService,
              private router: Router) {
            
            router.events
                  .filter(event => event instanceof NavigationStart)
                  .subscribe((event: NavigationStart) => {
                    if (event.url !== "/" && event.url !== "/home") {
                      this.navActive = true;
                    } else {
                      this.navActive = false;
                    }
                    this.navService.setNavStatus(this.navActive);
                  });

  }
}
