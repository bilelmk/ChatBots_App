import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, ToastController, ViewController} from 'ionic-angular';
import {Chatbot} from "../../../classes/chatbot";
import {ChatbotProvider} from "../../../providers/chatbot/chatbot";

/**
 * Generated class for the AjouterBotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-bot',
  templateUrl: 'ajouter-bot.html',
})
export class AjouterBotPage implements  OnInit{

  bot = new Chatbot ;
  constructor(public navCtrl: NavController ,private loadingCtrl :LoadingController, private botprovider : ChatbotProvider ,
              private viewCtrl : ViewController , private toastCtrl : ToastController) {
  }

  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    loading.dismiss() ;
  }

  Add(form){
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.bot.name = form.value.nom ;
    this.bot.description =form.value.description ;
    this.bot.isActive = form.value.active === "" ;

    this.botprovider.postChatbots(this.bot).subscribe(
      (res) => {
        let toast = this.toastCtrl.create({message: 'ChatBot ajouté avec succès',
          duration: 3000,
          position: 'bottom',
          cssClass : "succes" }) ;
        toast.present() ;
        loading.dismiss() ;
        form.reset();
        this.viewCtrl.dismiss({AddedBot: res});
      },

      (err) => {
        let toast = this.toastCtrl.create({message: 'Erreur lors de l\'ajout',
          duration: 3000,
          position: 'bottom',
          cssClass : "fail" }) ;
        toast.present() ;
        loading.dismiss() ;
        this.bot = new Chatbot() ;
      }
    ) ;

  }

  dismiss() {
    this.viewCtrl.dismiss({AddedBot: this.bot});
  }
}

