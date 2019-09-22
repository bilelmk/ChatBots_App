import {Component, OnInit} from '@angular/core';
import {
  IonicPage,
  LoadingController,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  ViewController
} from 'ionic-angular';
import {Utilisateur} from "../../../classes/utilisateur";
import {ProfilProvider} from "../../../providers/profil/profil";
import {Profil} from "../../../classes/profil";
import {UtilisateurProvider} from "../../../providers/utilisateur/utilisateur";

/**
 * Generated class for the ModifierUtilisateurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifier-utilisateur',
  templateUrl: 'modifier-utilisateur.html',
})
export class ModifierUtilisateurPage implements OnInit{

  utilisateur : Utilisateur ;
  profils : Profil[] = null ;
  constructor(public navCtrl: NavController, public navParams: NavParams , private modalCtrl : ModalController ,
             private viewCtrl : ViewController ,private loadingCtrl :LoadingController  ,  private toastCtrl : ToastController ,
              private profilprovider : ProfilProvider , private utilisateurprovider : UtilisateurProvider) {
  }

  ngOnInit(){
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.utilisateur = this.navParams.get('user') ;

    this.profilprovider.getProfils().subscribe(
      (res) => {
        this.profils = res ;
        loading.dismiss() ;
      },
      (err) => {
        let toast = this.toastCtrl.create({message: 'On ne peut pas atteindre le serveur',
          duration: 3000,
          position: 'bottom',
          cssClass : "fail" }) ;
        toast.present() ;
        loading.dismiss() ;

      }
    );

  }

  modifier(){
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.utilisateurprovider.putUser(this.utilisateur).subscribe(
      (res) => {
        let toast = this.toastCtrl.create({message: 'Utilisateur modifié avec succès',
          duration: 3000,
          position: 'bottom',
          cssClass : "succes" }) ;
        toast.present() ;
        loading.dismiss() ;

        this.viewCtrl.dismiss();
      },

      (err) => {
        let toast = this.toastCtrl.create({message: 'Erreur lors de modification',
          duration: 3000,
          position: 'bottom',
          cssClass : "fail" }) ;
        toast.present() ;
        loading.dismiss() ;
      }
    )
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
