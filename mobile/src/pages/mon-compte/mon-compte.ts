import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {Utilisateur} from "../../classes/utilisateur";

/**
 * Generated class for the MonComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mon-compte',
  templateUrl: 'mon-compte.html',
})
export class MonComptePage implements  OnInit{

  utilisateur = new Utilisateur ;

  constructor(public navCtrl: NavController, public navParams: NavParams , private viewCtrl : ViewController ,
              private storage : Storage , private loadingCtrl : LoadingController) {
  }


  ngOnInit(): void {

    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.storage.get('user').then(
      (resp) => {
        if( resp != null) {
          this.utilisateur = resp
        }
      });

    loading.dismiss() ;

  }


  dismiss() {
    this.viewCtrl.dismiss();
  }
}
