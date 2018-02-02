import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-graph',
  templateUrl: 'graph.html',
})
export class GraphPage {
  chartOptions:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.chartOptions = this.navParams.get('param1');
    console.log(this.chartOptions);
  }

}
