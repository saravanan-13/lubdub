import { Component } from '@angular/core';
import { NavController ,AlertController} from 'ionic-angular';
import { AddmedPage } from '../addmed/addmed';
import { ShareService } from '../../services/share';
import { TabsPage } from '../tabs/tabs';
import { MainService } from '../../services/MainService';
@Component({
  selector: 'page-meds',
  templateUrl: 'meds.html'
})
export class MedsPage {
serviceData:any;
token:any;
data:any;
del:any;
  constructor(private alertCtrl:AlertController,private auth:MainService,private shareService:ShareService,public navCtrl: NavController) {
   }
   ngOnInit(){
    this.serviceData = this.shareService.getToken();
    this.token = {
      "token" : this.serviceData,
      "method":"select"
    }
    this.meds(this.token);
  //  this.graphs();
  console.log("Monitor : ",this.token);
  }
   meds(data){
  this.auth.tablet(this.token).subscribe(response=>{
   console.log(response.data);
   this.data=response.data;
    //console.log("Monitor Token :", this.token);
  });
 }
  addmeds(){
    this.navCtrl.push(AddmedPage);
  }
   delete(item){

    this.serviceData = this.shareService.getToken();
    this.del = {
      "token" : this.serviceData,
      "method":"delete",
      "tablet":item
    }
      this.auth.tablet(this.del).subscribe(response=>{
       console.log(response.data);
       this.data=response.data;
       this.navCtrl.setRoot(MedsPage);
        //console.log("Monitor Token :", this.token);
      });
   }

}
