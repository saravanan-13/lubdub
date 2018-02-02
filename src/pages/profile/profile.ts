import { Component } from '@angular/core';
import { NavController, ToastController ,AlertController } from 'ionic-angular';
import { MainService } from '../../services/MainService';
import { ShareService } from '../../services/share';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  items1:any;items2:any;items3:any;items4:any;items5:any;items6:any;
  serviceData:any;
  token:any;
  constructor(private shareService:ShareService,public nav: NavController,private toastCtrl :ToastController, private auth: MainService, private alertCtrl: AlertController) {

  }
  ionViewDidLoad() {
    this.serviceData = this.shareService.getToken();
   this.token = {
     "token" : this.serviceData
   }
    this.auth.getProfile(this.token).subscribe(response => {
      //this.items=[data.username,data.age,data.gender,data.height,data.weight,data.bmi,data.bgroup];
      console.log(response.data);
     // this.items=[response.data.username,response.data.age,response.data.gender,response.data.height,response.data.weight,response.data.bmi,response.data.bgroup];
     this.items1 = response.data.username;
     this.items2 = response.data.age;
     this.items3 = response.data.gender;
     this.items4 = response.data.height;
     this.items5 = response.data.weight;
     this.items6 = response.data.bgroup;
     console.log(this.items2);
    }, err => {
            this.toastCtrl.create({
              message: err.message,
              duration : 3000,
              position : 'bottom'
            }).present();
      });
    }
}
