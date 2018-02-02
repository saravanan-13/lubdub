import { Component } from '@angular/core';

import { ReportPage } from '../report/report';
import { MedsPage } from '../meds/meds';
import { MonitorPage } from '../monitor/monitor';
import { ProfilePage } from '../profile/profile';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MonitorPage;
  tab2Root = ReportPage;
  tab3Root = MedsPage;
  tab4Root = ProfilePage;
  constructor() {

  }
}
