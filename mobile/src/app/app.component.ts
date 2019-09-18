import { Component, ViewChild } from '@angular/core';
import { LoadingController, Nav, Platform } from 'ionic-angular';
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




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;
  Utilisateur = UtilisateurPage;
  Profil = ProfilPage;
  Groupe = GroupesPage;
  ChatBot = ChatbotsPage;
  Base = BasePage;

  Home = HomePage ;

  constructor(platform: Platform, statusBar: StatusBar,
              splashScreen: SplashScreen , private loadingCtrl : LoadingController ,
              private storage : Storage ) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  logOut() {
    const loading = this.loadingCtrl.create({
      content:" Déconnexion . . . . "
    })
    loading.present();
    this.storage.remove('client');
    this.nav.setRoot(LoginPage) ;
    loading.dismiss() ;
  }

  openPage(p:any){
    this.nav.setRoot(p) ;
  }
}

