import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { Component } from '@angular/core';
import { NavController, ToastController ,AlertController } from 'ionic-angular';
import {TabsPage} from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Injectable()
export class NavService {
  constructor(public nav: NavController,private toastCtrl :ToastController, private auth: NavService, private alertCtrl: AlertController){}
public logout(){
  this.nav.setRoot(LoginPage);
  }
}
