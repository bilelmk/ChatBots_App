import {Component, OnInit} from '@angular/core';
import {ActionSheetController, AlertController, IonicPage, LoadingController, ModalController} from 'ionic-angular';
import {Utilisateur} from "../../classes/utilisateur";
import {UtilisateurProvider} from "../../providers/utilisateur/utilisateur";
import {ModifierUtilisateurPage} from "./modifier-utilisateur/modifier-utilisateur";
import {AjouterUtilisateurPage} from "./ajouter-utilisateur/ajouter-utilisateur";
/**
 * Generated class for the ConsultationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-utilisateur',
  templateUrl: 'utilisateur.html',
})
export class UtilisateurPage implements OnInit {
  Utilisateurs: Utilisateur[] = null ;
  constructor(private  utilisateurprovider : UtilisateurProvider, private loadingCtrl : LoadingController ,
              private actionSheetCtrl : ActionSheetController , private modalCtrl : ModalController ,
              private  alertCtrl : AlertController ) { }

  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;
    this.utilisateurprovider.getUsers().subscribe(
      (res) => {
        this.Utilisateurs = res ;
        console.log(res)
      }
    )


    loading.dismiss() ;
  }

  add(){
    console.log("wwww")
    const modal = this.modalCtrl.create(AjouterUtilisateurPage);
    modal.present();
  }


  actionSheet(user : Utilisateur) {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Actions',
      buttons: [
        {
          text: 'Modifier L\'utilisateur',
          handler: () => {
            const modal = this.modalCtrl.create(ModifierUtilisateurPage,{user : user} );
            modal.present();

          }
        },
        {
          text: 'Supprimer L\'utilisateur',
          handler: () => {
            const prompt = this.alertCtrl.create({
              title: 'Supprimer Utilisateurs',
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
                    this.utilisateurprovider.DeleteUser(user.id).subscribe(
                      (res) => {
                        console.log(res)
                      }
                    ) ;}
                }
              ]
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
