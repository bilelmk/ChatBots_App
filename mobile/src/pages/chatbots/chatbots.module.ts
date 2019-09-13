import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatbotsPage } from './chatbots';

@NgModule({
  declarations: [
    ChatbotsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatbotsPage),
  ],
})
export class ChatbotsPageModule {}
