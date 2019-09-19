import {Component, OnInit} from '@angular/core';
import {ActionSheetController, AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams,
  ToastController} from 'ionic-angular';
import {ChatbotProvider} from "../../providers/chatbot/chatbot";
import {BaseProvider} from "../../providers/base/base";
import {Connaissance} from "../../classes/connaissance";
import {AjouterCnPage} from "./ajouter-cn/ajouter-cn";
import {ModifierCnPage} from "./modifier-cn/modifier-cn";


/**
 * Generated class for the BasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-base',
  templateUrl: 'base.html',
})
export class BasePage implements OnInit {

  cns : Connaissance[] = null ;

  constructor(public navCtrl: NavController,   private actionSheetCtrl : ActionSheetController ,
              private modalCtrl : ModalController , private  alertCtrl : AlertController
              , private loadingCtrl : LoadingController , private navParams : NavParams , private toastCtrl : ToastController,
              private chatbotprovider : ChatbotProvider , private baseprovider : BaseProvider) {}


  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });

    loading.present() ;
    this.baseprovider.getConnaissances().subscribe(
      (res) => {
        this.cns = res ;
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
    const modal = this.modalCtrl.create(AjouterCnPage);
    modal.present();
    modal.onDidDismiss(
      (res) => {
        if(res.AddedCn.id != undefined) {
          this.cns.push(res.AddedCn)
        }
      }
    )
  }


  actionSheet(cn : Connaissance) {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Actions',
      buttons: [
  //       {
  //         text: 'Détails de Profil',
  //         handler: () => {
  //           const modal = this.modalCtrl.create(DetailProfilPage,{profil : profil} );
  //           modal.present();
  //
  //         }
  //       },
  //
        {
          text: 'Modifier Le Profil',
          handler: () => {
            const modal = this.modalCtrl.create(ModifierCnPage,{cn : cn} );
            modal.present();
  //           modal.onDidDismiss(
  //             (res) => {
  //               if(res.ModProfil != profil) {
  //                 let index = this.profils.findIndex(
  //                   (r) => {
  //                     return r.id == profil.id ;
  //                   }
  //                 );
  //                 this.profils[index] = res.ModProfil
  //               }
  //             }
  //           )
  //
          }
        },


        {
          text: 'Supprimer La Connaissance',
          handler: () => {
            const prompt = this.alertCtrl.create({
              title: 'Supprimer La Connaissance',
              message: "",
              buttons: [
                {
                  text: 'Cancel',
                  handler: data => {}
                },
                {
                  text: 'Supprimer',
                  handler: data => {
                    this.baseprovider.DeleteConnaissance(cn.id).subscribe(
                      (res) => {
                        this.cns.splice(this.cns.findIndex(
                          (g) => {return g.id == cn.id}
                        ),1);

                        let toast = this.toastCtrl.create({message: 'Connaissance supprimé avec succès',
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
