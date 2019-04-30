import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { CommonService } from '../services/common.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {

  msg : string;

  constructor(public service : CommonService){
    this.msg = "";
  }

  ionViewWillEnter(){
    this.service.getSomething("5cc7a9f1eb8ee176c9c56f95").subscribe(res => this.msg += res.msg);
  }

}
