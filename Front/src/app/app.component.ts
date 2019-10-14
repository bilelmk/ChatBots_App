import { Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(router: Router) {
    const navEndEvents = router.events.pipe(
        filter(
            event => event instanceof NavigationEnd
        )
    );

    navEndEvents.subscribe(
        (event: NavigationEnd) => {
          gtag('config', 'UA-149381857-1', {
            page_path: event.urlAfterRedirects,
          });
        }
    );
  }
}
