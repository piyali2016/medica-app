import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from './shared';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{
  showNavBar: boolean = true;
  sub: any;
  constructor(private api: ApiService, private route: ActivatedRoute) {
    // Do something with api
  }

  ngOnInit() {
    this.sub = this.route.data
      .subscribe(routeData => console.log(routeData)/*{
            this.showNavBar = !routeData.hideNavbar;
        }*/);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
