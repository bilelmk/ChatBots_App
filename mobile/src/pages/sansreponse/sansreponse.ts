import { Component } from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  IonicPage, LoadingController,
  ModalController,
  NavController,
  NavParams, ToastController
} from 'ionic-angular';
import {SansReponse} from "../../classes/SansReponse";
import {SansreponseProvider} from "../../providers/sansreponse/sansreponse";

/**
 * Generated class for the SansreponsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sansreponse',
  templateUrl: 'sansreponse.html',
})
export class SansreponsePage {

  sansreps: SansReponse[] = null ;
  constructor(public navCtrl: NavController,   private actionSheetCtrl : ActionSheetController ,
              private modalCtrl : ModalController , private  alertCtrl : AlertController, private loadingCtrl : LoadingController ,
              private navParams : NavParams , private toastCtrl : ToastController , private sansrep : SansreponseProvider) {}



  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.sansrep.getSansRepQuestions().subscribe(
      (res) => {
        this.sansreps = res ;
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

  resolve(){
    if(this.sansreps == null ){
      return true
    }
    else if(this.sansreps.length == 0){
      return true
    }
    else {
      return false
    }
  }
}
