import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../shared';

@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public api: any;
  public userData: any;
  constructor() {
    // Do stuff
  }

  ngOnInit() {
    this.api = new ApiService();
    this.userData = this.api.gerUserDetails();

    console.log('navbar component');
    console.log(this.userData);
  }

}
