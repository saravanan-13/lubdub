import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading,ToastController } from 'ionic-angular';
import { MainService } from '../../services/MainService';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';
import { ShareService } from '../../services/share';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  logindetails = { username: '', password: '' };

  constructor(private storage: Storage,private shareService: ShareService,private nav: NavController,private toastCtrl :ToastController, private auth: MainService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }
  public createAccount() {
    this.nav.push(RegisterPage);
  }



  createSuccess = false;
  public log() {
    let post_data = {
        username : this.logindetails.username,
        password: this.logindetails.password
    };
    this.auth.login(post_data).subscribe(response => {
    console.log(response.status);
    this.shareService.setToken(response.token);
      if (response.status == "success") {
        this.createSuccess = true;
        this.showPopup("Success", "Welcome Back");
      } else {
        this.showPopup("Error",response.reason);
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
              this.nav.setRoot(TabsPage);
            }
          }
        }
      ]
    });
    alert.present();
  }
}


