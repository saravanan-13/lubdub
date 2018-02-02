import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {

    token:any;
    constructor() {
        this.token = 'Blank';
    }
   clearToken(){
     this.token = "";
   }
    setToken(token) {
        this.token = token;
    }

    getToken() {
        return this.token;
    }
}
