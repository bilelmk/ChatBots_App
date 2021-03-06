import {Component, OnInit} from '@angular/core';
import { UtilisateurPage } from "../Utilisateurs/utilisateur";
import { ProfilPage } from "../Profils/profil";
import { LoginPage } from "../login/login";
import { Storage } from "@ionic/storage";
import { LoadingController, NavController } from "ionic-angular";
import {GroupesPage} from "../groupes/groupes";
import {ChatbotsPage} from "../chatbots/chatbots";
import {BasePage} from "../base/base";
import {CommunicationPage} from "../communication/communication";
import {PermissionProvider} from "../../providers/permission/permission";
import {SansreponsePage} from "../sansreponse/sansreponse";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  constructor(private storage : Storage , private  navCtrl : NavController,
              private loadingCtrl : LoadingController , private per : PermissionProvider){}


  Utilisateur = UtilisateurPage;
  Profil = ProfilPage;
  Groupe = GroupesPage;
  ChatBot = ChatbotsPage;
  Base = BasePage;
  Communication = CommunicationPage ;
  notif = SansreponsePage

  admin :boolean ;
  grp : boolean ;

  ngOnInit(): void {
    this.storage.get('user').then(
      (resp) => {
        if( resp != null) {
          this.admin= this.per.admin = resp.isSuperUser ;
          this.grp = this.per.grp = resp.isSuperAdmin || resp.isAdminGroup
        }
      });
  }


  logOut() {
    const loading = this.loadingCtrl.create({
      content:" Déconnexion . . . . "
    });
    loading.present();
    this.storage.remove('user');
    this.navCtrl.setRoot(LoginPage) ;
    loading.dismiss() ;
  }
}
