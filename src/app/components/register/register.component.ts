import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { ApiService, DbService } from '../../shared';
import { RegisterModel } from './register.model';

@Component({
  selector: 'my-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public model = new RegisterModel(null, null, null, null, null, null);
  public submitted: Boolean = false;
  public api: any;

  constructor(private _router: Router, private ds: DbService, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.api = new ApiService();
    console.log('Register component');
  }

  openSnackBar(message: string, action: string) {
    let snackbarRef = this.snackBar.open(message, action, {
      duration: 100,
    });
    console.log(snackbarRef);
    snackbarRef.onAction().subscribe(() => {
       snackbarRef.dismiss();
    });
  }


  onRegisterSubmit() {
    let that = this;
    this.submitted = true;
    this.ds.insert(this.model,that.api.USER ).then(
            (userData) => {
              console.log(userData);
              that.openSnackBar(that.api.SUCCESS_REGISTER , 'close');
              that._router.navigate( ['/login'] );
              that.submitted = false;
            },
            (err) => {
              console.log( err );
            }
    );

  }
}
