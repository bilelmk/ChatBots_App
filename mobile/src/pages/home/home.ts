import { Component } from '@angular/core';
import { UtilisateurPage } from "../Utilisateurs/utilisateur";
import { ProfilPage } from "../Profils/profil";
import { LoginPage } from "../login/login";
import { Storage } from "@ionic/storage";
import { LoadingController, NavController } from "ionic-angular";
import {GroupesPage} from "../groupes/groupes";
import {ChatbotsPage} from "../chatbots/chatbots";
import {BasePage} from "../base/base";
import {CommunicationPage} from "../communication/communication";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private storage : Storage ,
              private  navCtrl : NavController,
              private loadingCtrl : LoadingController){}


  Utilisateur = UtilisateurPage;
  Profil = ProfilPage;
  Groupe = GroupesPage;
  ChatBot = ChatbotsPage;
  Base = BasePage;
  Communication = CommunicationPage ;


  logOut() {
    const loading = this.loadingCtrl.create({
      content:" Déconnexion . . . . "
    })
    loading.present();
    this.storage.remove('user');
    this.navCtrl.setRoot(LoginPage) ;
    loading.dismiss() ;
  }
}
