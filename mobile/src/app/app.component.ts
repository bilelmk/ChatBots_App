import {Component, OnInit, ViewChild} from '@angular/core';
import {LoadingController, ModalController, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from "@ionic/storage" ;


import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { UtilisateurPage} from "../pages/Utilisateurs/utilisateur";
import { ProfilPage } from "../pages/Profils/profil";
import {GroupesPage} from "../pages/groupes/groupes";
import {ChatbotsPage} from "../pages/chatbots/chatbots";
import {BasePage} from "../pages/base/base";
import {CommunicationPage} from "../pages/communication/communication";
import {MonComptePage} from "../pages/mon-compte/mon-compte";
import {Utilisateur} from "../classes/utilisateur";
import {UtilisateurProvider} from "../providers/utilisateur/utilisateur";
import {PermissionProvider} from "../providers/permission/permission";




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  utilisateur = new Utilisateur ;

  rootPage:any = LoginPage;
  Utilisateur = UtilisateurPage;
  Profil = ProfilPage;
  Groupe = GroupesPage;
  ChatBot = ChatbotsPage;
  Base = BasePage;
  com = CommunicationPage
  Home = HomePage ;

  constructor(platform: Platform, statusBar: StatusBar,
              splashScreen: SplashScreen , private loadingCtrl : LoadingController ,
              private storage : Storage , private modalCtrl : ModalController ,
              private per : PermissionProvider) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  isAdmin(){
    return this.per.admin ;
  }

  isGrp(){
    return this.per.grp ;
  }



  logOut() {
    const loading = this.loadingCtrl.create({
      content:" Déconnexion . . . . "
    });
    loading.present();
    this.storage.remove('user');
    this.nav.setRoot(LoginPage) ;
    loading.dismiss() ;
  }

  openPage(p:any){
    this.nav.setRoot(p) ;
  }

  openCompte(){
    const modal = this.modalCtrl.create(MonComptePage);
    modal.present();
  }
}

