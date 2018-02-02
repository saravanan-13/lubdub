import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Camera } from '@ionic-native/camera';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { ReportPage } from '../pages/report/report';
import { MedsPage } from '../pages/meds/meds';
import { AddmedPage } from '../pages/addmed/addmed';
import { MonitorPage } from '../pages/monitor/monitor';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { InsertPage } from '../pages/insertpage/insertpage';
import {SelectReportTypePage} from '../pages/select-report-type/select-report-type';
import {GraphPage} from '../pages/graph/graph';
import {CreateProfile} from '../pages/createprofile/createprofile';
import { ShareService } from '../services/share';

import { HttpModule} from "@angular/http";
import {ChartModule} from 'angular2-highcharts';
import * as highcharts from 'highcharts';

import { FileOpener } from '@ionic-native/file-opener';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { MonitorService } from './service/monitor.service';
import { MainService } from '../services/MainService';
@NgModule({
  declarations: [
    MyApp,
    ReportPage,
    MedsPage,
    MonitorPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    TabsPage,
    SelectReportTypePage,
    InsertPage,
    GraphPage,AddmedPage,CreateProfile
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),ChartModule.forRoot(highcharts),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReportPage,
    MedsPage,
    MonitorPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    TabsPage,
    SelectReportTypePage,
    InsertPage,
    GraphPage,AddmedPage,CreateProfile
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    MonitorService,
    ShareService,
    MainService,
    FileChooser,
    FileOpener,
    FilePath,
    Camera
  ]
})
export class AppModule {}
