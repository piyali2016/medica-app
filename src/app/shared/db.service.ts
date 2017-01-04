import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


let Datastore = require('nedb');
@Injectable()
export class DbService {
    public dbObject;
    public api;
    public dbUserObject;
    public dbShopObject;
    public returnObj = { success: false, error: ''};

    constructor () {
        this.api = new ApiService();
        this.dbUserObject = new Datastore({ filename: './dist/db/dbUser.json', autoload: true });
        this.dbShopObject = new Datastore({ filename: './dist/db/dbShop.json', autoload: true });

    }

    setDBnameObj(dbName) {
        this.dbObject = '';
        if ( dbName === this.api.USER ) {
            this.dbObject = this.dbUserObject;
        } else {
            this.dbObject = this.dbUserObject;
        }
        console.log(this.dbObject);
    }

    insert(dataObj, dbName) {
        this.setDBnameObj(dbName);
        return new Promise((resolve, reject) => {
            return this.dbObject.insert(dataObj, ((err, data) => {
                if ( err ) {
                    reject(err);
                } else {
                    resolve(data);
                }
            }));
        });
    }


    findByQuery( dataQuery, dbName ) {
        this.setDBnameObj(dbName);
        return new Promise((resolve, reject) => {
            return this.dbObject.find(dataQuery, ((err, data) => {
                console.log(dataQuery);
                 console.log(data);
                if ( err ) {
                    reject(err);
                } else {
                    resolve(data);
                }
            }));
        });
    }

    findAll(dbName) {
        this.setDBnameObj(dbName);
        return new Promise((resolve, reject) => {
            return this.dbObject.find({}, ((err, data) => {
                if ( err ) {
                    reject(err);
                } else {
                    resolve(data);
                }
            }));
        });
    }
}
