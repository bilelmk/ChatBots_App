import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController} from 'ionic-angular';
import {Utilisateur} from "../../classes/utilisateur";
import {UtilisateurProvider} from "../../providers/utilisateur/utilisateur";
/**
 * Generated class for the ConsultationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-utilisateur',
  templateUrl: 'utilisateur.html',
})
export class UtilisateurPage implements OnInit {
  Utilisateurs: Utilisateur[] = null ;
  constructor(private  utilisateurprovider : UtilisateurProvider, private loadingCtrl : LoadingController) { }

  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;
    this.utilisateurprovider.getUsers().subscribe(
      (res) => {
        this.Utilisateurs = res ;
        console.log(res)
      }
    )


    loading.dismiss() ;
  }


}
