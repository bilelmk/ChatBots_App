import {Component, OnInit} from '@angular/core';
import {
  ActionSheetController, AlertController,
  IonicPage,
  LoadingController,
  ModalController,
  NavController,
  NavParams, ToastController
} from 'ionic-angular';
import {Groupe} from "../../classes/groupe";
import {GroupeProvider} from "../../providers/groupe/groupe";
import {AjouterGroupePage} from "./ajouter-groupe/ajouter-groupe";
import {ModifierGroupePage} from "./modifier-groupe/modifier-groupe";

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
  constructor(public navCtrl: NavController,   private actionSheetCtrl : ActionSheetController ,
              private modalCtrl : ModalController , private  alertCtrl : AlertController ,
              private  grpprovider : GroupeProvider , private loadingCtrl : LoadingController ,
              private navParams : NavParams , private toastCtrl : ToastController) {}



  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.grpprovider.getGroupes().subscribe(
      (res) => {
        this.groupes = res ;
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
    const modal = this.modalCtrl.create(AjouterGroupePage);
    modal.present();
    modal.onDidDismiss(
      (res) => {
        if(res.AddedGrp.name != undefined) {
          this.groupes.push(res.AddedGrp)
        }
      }
    )
  }

  actionSheet(grp : Groupe) {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Actions',
      buttons: [
        {
          text: 'Modifier Le Groupe',
          handler: () => {
            const modal = this.modalCtrl.create(ModifierGroupePage,{groupe : grp} );
            modal.present();

          }
        },


        {
      text: 'Supprimer Le Groupe',
        handler: () => {
        const prompt = this.alertCtrl.create({
          title: 'Supprimer Le Groupe',
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
                this.grpprovider.DeleteGroupe(grp.id).subscribe(
                  (res) => {
                    this.groupes.splice(this.groupes.findIndex(
                        (g) => {return g.id == grp.id}
                      ),1);

                      let toast = this.toastCtrl.create({message: 'Groupe supprimé avec succès',
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



