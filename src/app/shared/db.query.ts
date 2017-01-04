import { Injectable } from '@angular/core';


@Injectable()
export class DbQuerySample {

// USER
public userDB= [
            {
                'username' : 'admin',
                'pwd' : 'admin',
                'role' : 'A',
                'name' : 'admin fullname',
                'mobile' : '8334054899',
                'address' : 'Dayer bazar'
             }, // admin user
            {
                'username' : 'piyali',
                'pwd' : 'piyali',
                'role' : 'N',
                'name' : 'piyali saha',
                'mobile' : '8334054899',
                'address' : 'Baguiati'
            }, // non admin user
];

// STORE SETTINGS
public shopDB = {
                'shop_name' : 'Basanta Pharmacy',
                'shop_admin_id' : '<get adminid from user table>',
                'shop_address' : 'Dayer Bazar',
                'shop_mobile_no' : '8334054899',
                'shop_email' : 'piyali.2006@gmail.com'
};

}
