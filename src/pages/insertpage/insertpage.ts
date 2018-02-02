import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController } from 'ionic-angular';
import { MainService } from '../../services/MainService';
import { ShareService } from '../../services/share';
import { TabsPage } from '../tabs/tabs';
import {SelectReportTypePage} from '../select-report-type/select-report-type';
import { ReportPage } from '../report/report';
@Component({
  selector: 'page-insertpage',
  templateUrl: 'insertpage.html',
})
export class InsertPage {

  constructor(private shareService:ShareService,public nav: NavController, public navParams: NavParams,private auth: MainService, private alertCtrl: AlertController) {}
  reportUpdate : any;
  report:any;
  item:string;
   items:any;
   token:any;

    ionViewDidLoad(){
        this.token = this.shareService.getToken();
    this.item = this.navParams.get('param');
    if (this.item == 'BLOOD_TEST' ){
       this.items=['haemoglobin','wbc','esr30','esr60','testdate'];
this.reportUpdate = [];
    }
 else if (this.item == 'BLOOD_SUGAR' ){
      this.items=['fasting','pp','testdate'];
this.reportUpdate = [];
    }
 else  if (this.item == 'CHOLESTROL' ){
    this.items=['hdl','ldl','triglycerides','testdate'];
this.reportUpdate = [];
  }
 else if (this.item == 'URINE' ){
  this.items=['reaction','color','testdate'];
  this.reportUpdate = [];
}
else if (this.item == 'VITD' ){
  this.items=['vitd','testdate'];
this.reportUpdate = [];
}
  }


  createSuccess=false;
  insertReport(){


    if (this.item == 'BLOOD_TEST' ){
      this.report = {token:this.token,type:this.item,testdate:this.reportUpdate.testdate,
        haemoglobin :this.reportUpdate.haemoglobin,wbc:this.reportUpdate.wbc,
         esr30:this.reportUpdate.esr30,esr60:this.reportUpdate.esr60};
      console.log("\nREPORT" ,this.report);
   }


   else if (this.item == 'BLOOD_SUGAR' ){
  this.report = {token:this.token,type:this.item,testdate:this.reportUpdate.testdate,
    fasting :this.reportUpdate.fasting,pp:this.reportUpdate.pp};
  console.log("\nREPORT" ,this.report);
}


else  if (this.item == 'CHOLESTROL' ){
  this.report = {token:this.token,type:this.item,testdate:this.reportUpdate.testdate,
    hdl:this.reportUpdate.hdl,ldl:this.reportUpdate.ldl,triglycerides:this.reportUpdate.triglycerides};
    console.log("\nREPORT" ,this.report);
  }


  else if (this.item == 'URINE' ){
    this.report = {token:this.token,type:this.item,testdate:this.reportUpdate.testdate,
     color :this.reportUpdate.color,reaction:this.reportUpdate.reaction};
     console.log("\nREPORT" ,this.report);
}


else if (this.item == 'VITD' ){
       this.report = {token:this.token,type:this.item,testdate:this.reportUpdate.testdate,vitd :this.reportUpdate.vitd};
       console.log("\nREPORT" ,this.report);
      }

      this.auth.reportUpdate(this.report).subscribe(data => {
       console.log(data);
        if (data.status == "success") {
          this.createSuccess = true;
          this.showPopup("Success", "Report Entered");
          this.nav.setRoot(ReportPage);
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
