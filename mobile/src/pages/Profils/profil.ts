import {Component, OnInit} from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  IonicPage, LoadingController,
  ModalController,
  NavController,
  NavParams, ToastController
} from 'ionic-angular';
import {Profil} from "../../classes/profil";
import {ProfilProvider} from "../../providers/profil/profil";
import {ModifierProfilPage} from "./modifier-profil/modifier-profil";
import {DetailProfilPage} from "./detail-profil/detail-profil";
import {AjouterProfilPage} from "./ajouter-profil/ajouter-profil";

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

  constructor(public navCtrl: NavController,   private actionSheetCtrl : ActionSheetController ,
              private modalCtrl : ModalController , private  alertCtrl : AlertController ,
              private  profilprovider : ProfilProvider , private loadingCtrl : LoadingController ,
              private navParams : NavParams , private toastCtrl : ToastController) {}



  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });

    loading.present() ;
    this.profilprovider.getProfils().subscribe(
      (res) => {
        this.profils = res ;
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
    const modal = this.modalCtrl.create(AjouterProfilPage);
    modal.present();
    modal.onDidDismiss(
      (res) => {
        if(res.AddedProfil.name != undefined) {
          this.profils.push(res.AddedProfil)
        }
      }
    )
  }


  actionSheet(profil : Profil) {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Actions',
      buttons: [
        {
          text: 'Détails de Profil',
          handler: () => {
            const modal = this.modalCtrl.create(DetailProfilPage,{profil : profil} );
            modal.present();

          }
        },

        {
          text: 'Modifier Le Profil',
          handler: () => {
            const modal = this.modalCtrl.create(ModifierProfilPage,{profil : profil} );
            modal.present();
            modal.onDidDismiss(
              (res) => {
                if(res.ModProfil != profil) {
                  let index = this.profils.findIndex(
                    (r) => {
                      return r.id == profil.id ;
                    }
                  );
                  this.profils[index] = res.ModProfil
                }
              }
            )

          }
        },


        {
          text: 'Supprimer Le Profil',
          handler: () => {
            const prompt = this.alertCtrl.create({
              title: 'Supprimer Le Profil',
              message: "",
              buttons: [
                {
                  text: 'Cancel',
                  handler: data => {}
                },
                {
                  text: 'Supprimer',
                  handler: data => {
                    this.profilprovider.DeleteProfil(profil.id).subscribe(
                      (res) => {
                        this.profils.splice(this.profils.findIndex(
                          (g) => {return g.id == profil.id}
                        ),1);

                        let toast = this.toastCtrl.create({message: 'Profil supprimé avec succès',
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



