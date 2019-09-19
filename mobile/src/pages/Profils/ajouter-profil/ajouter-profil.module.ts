import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterProfilPage } from './ajouter-profil';

@NgModule({
  declarations: [
    AjouterProfilPage,
  ],
  imports: [
    IonicPageModule.forChild(AjouterProfilPage),
  ],
})
export class AjouterProfilPageModule {}
