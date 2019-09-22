import {Component, Injectable, OnInit} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import { Storage } from "@ionic/storage" ;
import {UtilisateurProvider} from "../../providers/utilisateur/utilisateur";
import {Utilisateur} from "../../classes/utilisateur";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit{

  Utilisateur : Utilisateur;
  constructor(private userprovider : UtilisateurProvider,
              public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl : AlertController,
              private loadingCtrl : LoadingController,
              private storage : Storage) {
  }



  ngOnInit() {
    this.storage.get('user').then(
      (resp) => {
        if( resp != null){
          this.navCtrl.setRoot(HomePage);
        }
  })
  }


  logForm(form) {
    const loading = this.loadingCtrl.create({
      content:" Connexion . . . . "
    });
    loading.present() ;

    this.userprovider.login(form.value.login , form.value.pass).subscribe(
      (resp)=> {
        this.Utilisateur = resp ;
        this.storage.set('user' , resp) ;
        sessionStorage.setItem('admin' , this.Utilisateur.isSuperUser.toString())
        this.navCtrl.setRoot(HomePage);
        loading.dismiss()
      },
      (error)=> {
        console.log(error)
        const alert = this.alertCtrl.create({
          title: 'La connexion a échoué ',
          subTitle: 'Mot de passe ou numéro client incorrect',
          buttons: ['OK'],
          cssClass: "alert"
        });
        loading.dismiss()
        alert.present();
      }

    )
  }
}
