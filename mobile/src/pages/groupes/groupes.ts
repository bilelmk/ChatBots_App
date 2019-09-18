import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Groupe} from "../../classes/groupe";
import {GroupeProvider} from "../../providers/groupe/groupe";

/**
 * Generated class for the GroupesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groupes',
  templateUrl: 'groupes.html',
})
export class GroupesPage implements OnInit {
  groupes: Groupe[] = null ;
  constructor(public navCtrl: NavController, public navParams: NavParams ,
              private  grpprovider : GroupeProvider , private loadingCtrl : LoadingController ) {}



  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.grpprovider.getGroupes().subscribe(
      (res) => {
        this.groupes = res ;
        console.log(res)
      }
    )


    loading.dismiss() ;

  }


}

