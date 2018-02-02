import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SelectReportTypePage} from '../select-report-type/select-report-type';
import {MonitorService} from '../../app/service/monitor.service'
import { FileOpener } from '@ionic-native/file-opener';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
//import { AndroidPermissions } from '@ionic-native/android-permissions';

@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {
items:any;
  constructor(public nav: NavController,private monitorService:MonitorService,
    private fileOpener:FileOpener,private fileChooser:FileChooser,private filePath:FilePath) {
  }

  ngOnInit(){
    this.getPosts('sports',10);
  }
   getPosts(category,limit){
  this.monitorService.getPosts(category,limit).subscribe(response=>{
   this.items = response.data.children;
   console.log(this.items);
  });
 }
  public userEnter() {
    this.nav.push(SelectReportTypePage);
  }
  public chooseFile(){
    this.fileChooser.open().then(file=>{
      this.filePath.resolveNativePath(file).then(resolvedFilePath =>{
        this.fileOpener.open(resolvedFilePath,'application/pdf').then(value =>{
          alert("It worked..!!");
        }).catch(err=>{
          alert("Error");
        })
      })
    });
  }
}
