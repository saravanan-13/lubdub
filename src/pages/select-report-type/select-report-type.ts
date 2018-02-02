import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{InsertPage} from '../insertpage/insertpage';
@Component({
  selector: 'page-select-report-type',
  templateUrl: 'select-report-type.html',
})
export class SelectReportTypePage {
  constructor(public navCtrl: NavController, public navParams: NavParams){}
  items = ['BLOOD_TEST','BLOOD_SUGAR','CHOLESTROL','URINE','VITD'];
  enterItem(item){
    console.log(item);
     this.navCtrl.push(InsertPage,{
       param : item
      });
  }
}
