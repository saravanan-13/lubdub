import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class MainService {
  BASE_URL = 'http://139.59.0.65/';
  constructor( private http: Http){

  }
  login(postData): Observable<any> {
    return this.http.post( this.BASE_URL+ 'login', postData).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }
  logout(postData): Observable<any> {
    return this.http.post( this.BASE_URL+ 'logout', postData).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }
  register(postData): Observable<any> {
    return this.http.post( this.BASE_URL+ 'register', postData).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }

  graphs(token): Observable<any> {
    return this.http.post( this.BASE_URL+ 'graphs',token).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }

  getProfile(token):Observable<any> {
    return this.http.post( this.BASE_URL+ 'getProfile',token).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }

  updateProfile(post_data): Observable<any> {
    return this.http.post( this.BASE_URL+ 'updateProfile', post_data).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }

  monitor(token):Observable<any> {
    return this.http.post( this.BASE_URL+ 'monitor',token).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }

  reportUpdate(data):Observable<any> {
    return this.http.post( this.BASE_URL+ 'reportUpdate',data).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }
}
