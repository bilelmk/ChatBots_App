import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserGroupePage } from './user-groupe';

@NgModule({
  declarations: [
    UserGroupePage,
  ],
  imports: [
    IonicPageModule.forChild(UserGroupePage),
  ],
})
export class UserGroupePageModule {}
