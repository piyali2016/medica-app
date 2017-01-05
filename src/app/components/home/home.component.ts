import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { ApiService, DbService } from '../../shared';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
}) 
export class HomeComponent implements OnInit, OnDestroy {
  id: any;
  private sub: any;
  public userObj: any;
  public api: any;

  constructor(private route: ActivatedRoute, private _router: Router, private ds: DbService) {}

  ngOnInit() {
    this.api = new ApiService();
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
    });

    if (!this.id) {
       this._router.navigate( [ '/login' ] );
    }

    this.getUserdetails(this.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getUserdetails( uid: string) {
    let that = this;
    this.ds.findByQuery({'_id' : uid}, that.api.USER).then(
            (userData) => {
              let userUID = ( userData[0] && userData[0]._id ) ? userData[0]._id : false;
              if ( userUID ) {
                that.userObj = userData[0];
              } else {
                console.log('Error');
              }
            },
            (err) => {
              console.log( err );
            }
    );
  }
}
