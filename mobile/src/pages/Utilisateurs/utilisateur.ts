import {Component, OnInit} from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  IonicPage,
  LoadingController,
  ModalController,
  ToastController
} from 'ionic-angular';
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
              private  alertCtrl : AlertController , private toastCtrl : ToastController ) { }

  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.utilisateurprovider.getUsers().subscribe(
      (res) => {
        this.Utilisateurs = res ;
        loading.dismiss() ;
      },
      (err) =>{
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
    const modal = this.modalCtrl.create(AjouterUtilisateurPage);
    modal.present();
    modal.onDidDismiss(
      (res) => {
        if(res.AddedUser.id != undefined) {
          this.Utilisateurs.push(res.AddedUser)
        }
      }
    )
  }

  resolve(){
    if(this.Utilisateurs == null ){
      return true
    }
    else if(this.Utilisateurs.length == 0){
      return true
    }
    else {
      return false
    }
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
              title: 'Supprimer L\'Utilisateurs',
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
                        this.Utilisateurs.splice(this.Utilisateurs.findIndex(
                          (g) => {return g.id == user.id}
                        ),1);

                        let toast = this.toastCtrl.create({message: 'Utilisateurs supprimé avec succès',
                          duration: 3000,
                          position: 'bottom',
                          cssClass : "succes" }) ;
                        toast.present() ;

                      },
                      (err) => {
                        let toast = this.toastCtrl.create({message: 'Erreur lors de la suppression',
                          duration: 3000,
                          position: 'bottom',
                          cssClass : "fail" }) ;
                        toast.present() ;
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
