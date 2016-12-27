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
  public model = new LoginModel('', '');
  public submitted: Boolean = false;
  public loginErrorMsg: string;
  public loginError: Boolean = false;
  public ls: any;

  constructor(private _router: Router, private ds: DbService, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.ls = new ApiService();
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
    this.loginErrorMsg = '';
    this.loginError = false;
    this.submitted = true;
    console.log('onsubmit');
    this.ds.findUserByQuery(this.model).then(
            (userData) => {
              let userUID = ( userData[0] && userData[0]._id ) ? userData[0]._id : false;
              if ( userUID ) {
                that._router.navigate( ['home'] );
              } else {
                that.loginErrorMsg = that.ls.INVALID_LOGIN;
                that.loginError = true;
                that.submitted = false;
                that.openSnackBar(that.ls.INVALID_LOGIN , 'close');
              }
            },
            (err) => {
              console.log( err );
            }
    );

  }
}
