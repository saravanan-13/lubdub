import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddmedPage } from '../addmed/addmed';

@Component({
  selector: 'page-meds',
  templateUrl: 'meds.html'
})
export class MedsPage {
  meds:{
	   "Hydrocodone" :	{
		 	4 :
				[
					{ "time":"10 a.m" },
          { "time":"1 p.m" },
					{ "time":"4 p.m" },
					{ "time":"7 p.m" }
				]
  },
 "Generic Zocor" : {
      2:[
        {"time":"8 a.m"},
        {"time" :"8 p.m"}
       ]
    },
   "Amoxicillin":{
     3 :[
       {"time":"9 a.m"},
       {"time":"2 p.m"},
       {"time":"8 p.m"}
     ]
   }
}
  constructor(public nav: NavController) {

  }

  addmeds(){
    this.nav.push(AddmedPage);
  }

}
