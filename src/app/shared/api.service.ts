import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  //ERROR MESSAGE
  public INVALID_LOGIN = 'Invalid username/password. Please try again';
  public SUCCESS_REGISTER = 'Success, You are now registered.';

  //DATABASE NAMES
  public USER = 'user';
  public shop = 'shop';

}
