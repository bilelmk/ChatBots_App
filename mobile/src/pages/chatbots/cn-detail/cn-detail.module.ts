import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CnDetailPage } from './cn-detail';

@NgModule({
  declarations: [
    CnDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CnDetailPage),
  ],
})
export class CnDetailPageModule {}
