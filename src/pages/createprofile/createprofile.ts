import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController } from 'ionic-angular';
import { MainService } from '../../services/MainService';
import { TabsPage } from '../tabs/tabs';
import { ShareService } from '../../services/share';
@Component({
  selector: 'page-createprofile',
  templateUrl: 'createprofile.html',
})
export class CreateProfile {

//  serviceData:any;
  registerCredentials = { token:'', gender: '' ,age: '', weight:'',height:'',bgroup:'' };
  serviceData:any;
  constructor(private shareService:ShareService,public nav: NavController, public navParams: NavParams,private auth: MainService, private alertCtrl: AlertController) {
  }
  ngOnInit() {
    this.serviceData = this.shareService.getToken();
  }
  createSuccess=false;

createProfile(){

  this.registerCredentials.token=this.serviceData;
  console.log(this.registerCredentials);

  this.auth.updateProfile(this.registerCredentials).subscribe(data => {
    if (data.status == "success") {
      this.createSuccess = true;
      this.showPopup("Success", "Profile Created.");
      this.nav.setRoot(TabsPage);
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
