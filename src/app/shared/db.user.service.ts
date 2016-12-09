import { Injectable } from '@angular/core';
let Datastore = require('nedb');
@Injectable()
export class DbService {
    public dbUser;
    public returnObj = { success: false, error: ''};
    constructor () {
        this.dbUser = new Datastore({ filename: './dist/db/db.users.json', autoload: true });
        console.log(this.dbUser);
    }

    insert(user) {
        return new Promise((resolve, reject) => {
            return this.dbUser.insert(user, ((err, data) => {
                if ( err ) {
                    reject(err);
                } else {
                    resolve(data);
                }
            }));
        });
    }


    findUserByQuery( userQuery ) {
        return new Promise((resolve, reject) => {
            return this.dbUser.find(userQuery, ((err, data) => {
                if ( err ) {
                    reject(err);
                } else {
                    resolve(data);
                }
            }));
        });
    }

}
