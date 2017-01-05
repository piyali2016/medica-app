import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { ApiService, DbService } from '../../shared';

@Component({
  selector: 'my-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  id: any;
  private sub: any;
  public userObj: any;
  public api: any;
  public role: string;

  constructor(private route: ActivatedRoute, private _router: Router, private ds: DbService) {}

  ngOnInit() {
    this.api = new ApiService();
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
    });

    if (!this.id) {
       this._router.navigate( [ '/login' ] );
    }
    this.userObj= this.api.gerUserDetails();
    if(this.userObj.role === null){
        this.userObj.role = 'N';
    }

    if(this.userObj.role === 'A'){
        this.role = 'Admin';
    }else{
      this.role = 'Normal';
    }

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
