import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../shared';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public api: any;
  public userData: any;
  constructor() {
    // Do stuff
  }

  ngOnInit() {
    this.api = new ApiService();
    this.userData = this.api.gerUserDetails();

    console.log('header component');
    console.log(this.userData);
  }

}
