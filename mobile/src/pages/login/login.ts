import {Component, Injectable, OnInit} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import { Storage } from "@ionic/storage" ;

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl : AlertController,
              private loadingCtrl : LoadingController,
              private storage : Storage) {
  }



  ngOnInit() {
    this.storage.get('client').then(
      (resp) => {
        if( resp != null){
          this.navCtrl.setRoot(HomePage);
        }
  })}


  logForm(form) {
    const loading = this.loadingCtrl.create({
      content:" Connexion . . . . "
    })
    loading.present() ;
    // this.loginprovider.getClient(form.value.login , form.value.pass).subscribe(
    //   (resp)=> {
    //
    //     this.client = resp ;
    //     this.storage.set('client' , resp) ;
        this.navCtrl.setRoot(HomePage);
    //     loading.dismiss()
    //   },
    //
    //   (error)=> {
    //
        loading.dismiss();
    //       const alert = this.alertCtrl.create({
    //       title : 'La connexion a échoué ',
    //       subTitle: 'Mot de passe ou numéro client incorrect',
    //       buttons :['OK'],
    //       cssClass : "alert"
    //     });
    //     alert.present() ;

  }
  //   )
  // }
}
