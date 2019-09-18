import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterUtilisateurPage } from './ajouter-utilisateur';

@NgModule({
  declarations: [
    AjouterUtilisateurPage,
  ],
  imports: [
    IonicPageModule.forChild(AjouterUtilisateurPage),
  ],
})
export class AjouterUtilisateurPageModule {}
