import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Groupe} from "../../classes/groupe";
import {GroupeProvider} from "../../providers/groupe/groupe";
import {Profil} from "../../classes/profil";
import {ProfilProvider} from "../../providers/profil/profil";

/**
 * Generated class for the BudgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage implements OnInit {
  profils: Profil[] = null ;
  constructor(public navCtrl: NavController, public navParams: NavParams ,
              private  profilprovider : ProfilProvider ) {}



  ngOnInit() {
    this.profilprovider.getProfils().subscribe(
      (res) => {
        this.profils = res ;
        console.log(res)
      }
    )

  }


}



