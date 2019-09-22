import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {Connaissance} from "../../../classes/connaissance";
import {BaseProvider} from "../../../providers/base/base";

/**
 * Generated class for the ModifierCnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifier-cn',
  templateUrl: 'modifier-cn.html',
})
export class ModifierCnPage {

  cn = new Connaissance() ;
  constructor(public navCtrl: NavController, public navParams: NavParams ,private loadingCtrl :LoadingController
              , private toastCtrl: ToastController , private viewCtrl : ViewController ,private cnprovider : BaseProvider) {
  }

  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.cn = this.navParams.get('cn') ;

    loading.dismiss() ;
  }


  modifier(){
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.cnprovider.putConnaissance(this.cn).subscribe(
      (res) => {
        let toast = this.toastCtrl.create({message: 'Connaissance modifié avec succès',
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
