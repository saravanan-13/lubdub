import { Component ,ViewChild} from '@angular/core';
import { Platform , NavController,ToastController,App,MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MonitorService} from './service/monitor.service';
import { TabsPage } from '../pages/tabs/tabs';
import { MainService } from '../services/MainService';
import { LoginPage } from '../pages/login/login';
import { CreateProfile} from '../pages/createprofile/createprofile';
import { ShareService } from '../services/share';
import { Services } from '@angular/core/src/view';
import { Menu } from 'ionic-angular/components/menu/menu';

@Component({
  templateUrl: 'app.html',
  providers:[MonitorService,MainService]
})
export class MyApp {
  rootPage:any = LoginPage;
  serviceData:any;
  token:any;
  private navCtrl: NavController;
  constructor(public menuCtrl: MenuController,private shareService : ShareService,private app:App,private toastCtrl:ToastController,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private auth:MainService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.menuCtrl.enable(false, 'myMenu');
      this.navCtrl = app.getActiveNav();
    });
  }
      public updateprofile(){
        console.log("update profile");
        this.navCtrl.push(CreateProfile);
      }
      public logout(){
      console.log("Logout");
       this.serviceData = this.shareService.getToken();
       this.token = { "token" : this.serviceData};
       console.log(this.token);
       this.auth.logout(this.token).subscribe(data => {
        if (data.status == "success") {
          this.menuCtrl.enable(false,'myMenu');
          this.navCtrl.setRoot(LoginPage);
        }
      });

     }

  }
