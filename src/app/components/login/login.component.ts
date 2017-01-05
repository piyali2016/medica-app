import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { ApiService, DbService } from '../../shared';
import { LoginModel } from './login.model';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public model = new LoginModel(null, null);
  public submitted: Boolean = false;
  public api: any;

  constructor(private _router: Router, private ds: DbService, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.api = new ApiService();
    this.api.clearLocalStorage();
    console.log('login component');
  }

  openSnackBar(message: string, action: string) {
    let snackbarRef = this.snackBar.open(message, action, {
      duration: 2000,
    });
    snackbarRef.onAction().subscribe(() => {
       snackbarRef.dismiss();
    });
  }

  onSubmit() {
    let that = this;
    this.submitted = true;
    this.ds.findByQuery(this.model, that.api.USER).then(
            (userData) => {
              let userUID = ( userData[0] &&  userData[0]._id ) ? userData[0]._id : false;
              if ( userUID ) {
                that.api.setUserDetails(userData[0]);
                that._router.navigate(['/home', userUID]);
              } else {
                that.submitted = false;
                that.openSnackBar(that.api.INVALID_LOGIN , 'close');
              }
            },
            (err) => {
              console.log( err );
            }
    );

  }
}
