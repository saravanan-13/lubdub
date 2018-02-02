import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-addmed',
  templateUrl: 'addmed.html',
})
export class AddmedPage {
   time:string;
   time_data = [];
   med_data = []; 
   med:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    addMeds(){
        this.time_data.push(this.time);
        this.med_data.push(this.med);
        console.log(this.med_data);
        console.log("nnnn");
        console.log(this.time_data);
    }
}
