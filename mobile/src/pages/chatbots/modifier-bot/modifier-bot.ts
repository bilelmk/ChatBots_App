import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {Chatbot} from "../../../classes/chatbot";
import {ChatbotProvider} from "../../../providers/chatbot/chatbot";

/**
 * Generated class for the ModifierBotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifier-bot',
  templateUrl: 'modifier-bot.html',
})
export class ModifierBotPage {

  bot = new Chatbot() ;
  constructor(public navCtrl: NavController, public navParams: NavParams ,private loadingCtrl :LoadingController
              , private toastCtrl: ToastController , private viewCtrl : ViewController ,
              private botprovider : ChatbotProvider) {
  }

  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.bot = this.navParams.get('bot') ;

    loading.dismiss() ;
  }


  modifier(){
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.botprovider.putChatbots(this.bot).subscribe(
      (res) => {
        let toast = this.toastCtrl.create({message: 'Chatbot modifié avec succès',
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
