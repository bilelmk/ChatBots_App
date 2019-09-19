import {Component, OnInit} from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  IonicPage, LoadingController,
  ModalController,
  NavController,
  NavParams, ToastController
} from 'ionic-angular';
import {ChatbotProvider} from "../../providers/chatbot/chatbot";
import {Chatbot} from "../../classes/chatbot";
import {AjouterBotPage} from "./ajouter-bot/ajouter-bot";
import {ModifierBotPage} from "./modifier-bot/modifier-bot";

/**
 * Generated class for the ChatbotsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatbots',
  templateUrl: 'chatbots.html',
})
export class ChatbotsPage implements OnInit {

  bots: Chatbot[] = null ;
  constructor(public navCtrl: NavController,   private actionSheetCtrl : ActionSheetController ,
              private modalCtrl : ModalController , private  alertCtrl : AlertController, private loadingCtrl : LoadingController ,
              private navParams : NavParams , private toastCtrl : ToastController , private botsprovider : ChatbotProvider) {}



  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.botsprovider.getChatbots().subscribe(
      (res) => {
        this.bots = res ;
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


  add(){
    const modal = this.modalCtrl.create(AjouterBotPage);
    modal.present();
    // modal.onDidDismiss(
    //   (res) => {
    //     if(res.AddedGrp.name != undefined) {
    //       this.groupes.push(res.AddedGrp)
    //     }
    //   }
    // )
  }

  actionSheet(bot : Chatbot) {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Actions',
      buttons: [
        {
          text: 'Modifier Le ChatBot',
          handler: () => {
            const modal = this.modalCtrl.create(ModifierBotPage,{bot : bot} );
            modal.present();

          }
        },


        {
          text: 'Supprimer Le ChatBot',
          handler: () => {
            const prompt = this.alertCtrl.create({
              title: 'Supprimer Le ChatBot',
              message: "",
              buttons: [
                {
                  text: 'Cancel',
                  handler: data => {

                  }
                },
                {
                  text: 'Supprimer',
                  handler: data => {
                    this.botsprovider.DeleteChatbots(bot.id).subscribe(
                      (res) => {
                        this.bots.splice(this.bots.findIndex(
                          (g) => {return g.id == bot.id}
                        ),1);

                        let toast = this.toastCtrl.create({message: 'ChatBot supprimé avec succès',
                          duration: 3000,
                          position: 'bottom',
                          cssClass : "succes" }) ;
                        toast.present() ;
                      },
                      (err)=>{
                        let toast = this.toastCtrl.create({message: 'Erreur lors de la suppression',
                          duration: 3000,
                          position: 'bottom',
                          cssClass : "fail" }) ;
                        toast.present() ;
                      }
                    ) ;}
                }]
            });
            prompt.present();
          }

        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }


}

