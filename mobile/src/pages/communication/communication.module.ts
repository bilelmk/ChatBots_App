import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunicationPage } from './communication';

@NgModule({
  declarations: [
    CommunicationPage,
  ],
  imports: [
    IonicPageModule.forChild(CommunicationPage),
  ],
})
export class CommunicationPageModule {}
