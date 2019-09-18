import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterGroupePage } from './ajouter-groupe';

@NgModule({
  declarations: [
    AjouterGroupePage,
  ],
  imports: [
    IonicPageModule.forChild(AjouterGroupePage),
  ],
})
export class AjouterGroupePageModule {}
