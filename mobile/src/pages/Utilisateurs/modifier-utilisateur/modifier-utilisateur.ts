import {Component, OnInit} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Utilisateur} from "../../../classes/utilisateur";

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
  constructor(public navCtrl: NavController, public navParams: NavParams , private modalCtrl : ModalController ,
             private viewCtrl : ViewController ) {
  }

  ngOnInit(){
    this.utilisateur = this.navParams.get('user') ;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
