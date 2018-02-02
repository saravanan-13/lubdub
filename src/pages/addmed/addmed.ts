import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController } from 'ionic-angular';
import { last } from 'rxjs/operator/last';
import { ShareService } from '../../services/share';
import { TabsPage } from '../tabs/tabs';
import { MainService } from '../../services/MainService';
import { MedsPage } from '../meds/meds';

@Component({
  selector: 'page-addmed',
  templateUrl: 'addmed.html',
})
export class AddmedPage {
   med= { token:'', method:"insert",tablet:'',time:'' };
  serviceData:any;
   constructor(private alertCtrl:AlertController,private auth:MainService,private shareService:ShareService,public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
    this.serviceData = this.shareService.getToken();
  }
  createSuccess = false;
    addMeds(){
    this.med.token = this.serviceData;
      console.log(this.med);
      this.auth.tablet(this.med).subscribe(data => {
        if (data.status == "success") {
          this.createSuccess = true;
          this.showPopup("Success", "Tabs Saved");
          this.navCtrl.setRoot(MedsPage);
        } else {
          this.showPopup("Error",data.reason);
        }
      },
        error => {
          this.showPopup("Error", error);
        });
    }
    showPopup(title, text) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: text,
        buttons: [
          {
            text: 'OK',
            handler: data => {
              if (this.createSuccess) {
              }
            }
          }
        ]
      });
      alert.present();
    }
}
