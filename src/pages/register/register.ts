import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading,ToastController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ProfilePage } from '../profile/profile';
import { CreateProfile} from '../createprofile/createprofile';
import { MainService } from '../../services/MainService';
import { ShareService } from '../../services/share';
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  loading: Loading;
  registerCredentials = { "username":"","password": "" , "email":"","phone":"" };

  constructor(private shareService :ShareService,private toastCtrl:ToastController, private loadingCtrl: LoadingController,private nav: NavController, private auth: MainService, private alertCtrl: AlertController) { }

/*
  public register() {
    this.showLoading()
    let post_data = {
        username : this.registerCredentials.username,
        password: this.registerCredentials.password,
        email:this.registerCredentials.email,
        phone:this.registerCredentials.phone
    };
    this.auth.register(post_data).subscribe(response => {
    console.log(response.status);
    //this.shareService.setToken(response.token);
      if (response.status == "login successful") {
        this.nav.setRoot(CreateProfile);
      }
    }, err => {
          this.toastCtrl.create({
            message: err.message,
            duration : 3000,
            position : 'bottom'
          }).present();
    });

  }



  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

*/

  public register() {
    this.auth.register(this.registerCredentials).subscribe(response => {
      console.log(this.registerCredentials);
     console.log("response" , response);

      if (response.status == "success") {
        this.shareService.setToken(response.token);
        this.createSuccess = true;
        this.showPopup("Success", "Account created.");
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
              this.nav.setRoot(CreateProfile);
            }
          }
        }
      ]
    });
    alert.present();
  }

}
