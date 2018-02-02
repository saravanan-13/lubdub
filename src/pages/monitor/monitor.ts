import { Component } from '@angular/core';
import { NavController ,NavParams,ToastController} from 'ionic-angular';
import {MonitorService} from '../../app/service/monitor.service';
import { MainService } from '../../services/MainService';
import { GraphPage } from '../graph/graph';
import { ReportPage } from '../report/report';
import { Storage } from '@ionic/storage';
import { ShareService } from '../../services/share';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
let type:any;
@Component({
  selector: 'page-monitor',
  templateUrl: 'monitor.html'
})
export class MonitorPage {
 chartOptions:any;
 items:any;
 data:any;
 chartoption:any;
 token:any;
 serviceData:any;
 graphSelect:any;
  constructor(private menuCtrl:MenuController,private shareService:ShareService,private storage: Storage,public navCtrl: NavController,private auth:MainService,public navParams: NavParams,private monitorService:MonitorService,private toastCtrl:ToastController) {
    this.menuCtrl.enable(true, 'myMenu');
  }
  //to graph.ts
  ngOnInit(){
    this.serviceData = this.shareService.getToken();
    this.token = {
      "token" : this.serviceData
    }
    this.monitor(this.token);
  //  this.graphs();
  console.log("Monitor : ",this.token);
  }
   monitor(data){
  this.auth.monitor(this.token).subscribe(response=>{
   console.log(response.data);
   this.data=response.data;
    //console.log("Monitor Token :", this.token);
  });
 }
/* graphs(){
    this.auth.graphs(token).subscribe(response=>{
     console.log(response);
     this.chartoption=response.data[0];
    });
   }
   */

 param:any;
public viewItem(items) {
  this.graphSelect = {
     "token":this.serviceData,
     "type": items
  }
  console.log("Graph token",this.graphSelect);
  this.auth.graphs(this.graphSelect).subscribe(response=>{
   // console.log("Graph response ",response.data.title.text);
      this.param=response.data;
     this.navCtrl.push(GraphPage,{param1 : this.param});
   });
 }
}
