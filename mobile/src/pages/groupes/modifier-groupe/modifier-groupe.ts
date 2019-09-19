import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {GroupeProvider} from "../../../providers/groupe/groupe";
import {Chatbot} from "../../../classes/chatbot";
import {ChatbotProvider} from "../../../providers/chatbot/chatbot";
import {Groupe} from "../../../classes/groupe";

/**
 * Generated class for the ModifierGroupePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifier-groupe',
  templateUrl: 'modifier-groupe.html',
})
export class ModifierGroupePage implements OnInit{

  bots : Chatbot[] = null ;
  groupe = new Groupe() ;
  constructor(public navCtrl: NavController ,private loadingCtrl :LoadingController ,
    private grpprovider : GroupeProvider , private botprovider : ChatbotProvider , private viewCtrl : ViewController ,
    private toastCtrl : ToastController , private navParams : NavParams) {
  }

  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.groupe = this.navParams.get('groupe') ;
    console.log(this.groupe)

    this.grpprovider.getGroupesBots().then(
      botsindex => {
        this.botprovider.getChatbots().subscribe(
          (res) => {
            this.bots = res.filter(
              chb => {
                return !botsindex.find((i)=> {
                  return (i == chb.id)
                })
              }
            )
          },
          (error) =>{
            let toast = this.toastCtrl.create({message: 'On ne peut pas atteindre le serveur',
              duration: 3000,
              position: 'bottom',
              cssClass : "fail" }) ;
            toast.present() ;
          }
        )
      }
    ).catch(
      (err) =>{
        let toast = this.toastCtrl.create({message: 'On ne peut pas atteindre le serveur',
          duration: 3000,
          position: 'bottom',
          cssClass : "fail" }) ;
        toast.present() ;
      }
    ) ;
    loading.dismiss() ;
  }


  // modifier(form){
  //   const loading = this.loadingCtrl.create({
  //     content:" Loading . . . . "
  //   });
  //   loading.present() ;
  //
  //   this.groupe.name = form.value.nom ;
  //   this.groupe.description =form.value.description ;
  //   this.groupe.isActive = form.value.active === "" ;
  //   this.groupe.chatBot = form.value.bot ;
  //
  //   this.grpprovider.postGroupe(this.groupe).subscribe(
  //     (res) => {
  //       let toast = this.toastCtrl.create({message: 'Groupe ajouté avec succès',
  //         duration: 3000,
  //         position: 'bottom',
  //         cssClass : "succes" }) ;
  //       toast.present() ;
  //       loading.dismiss() ;
  //       form.reset();
  //       this.viewCtrl.dismiss({AddedGrp: this.groupe});
  //     },
  //
  //     (err) => {
  //       let toast = this.toastCtrl.create({message: 'Erreur lors de l\'ajout',
  //         duration: 3000,
  //         position: 'bottom',
  //         cssClass : "fail" }) ;
  //       toast.present() ;
  //       loading.dismiss() ;
  //       this.groupe = null ;
  //     }
  //   )
  // }

  dismiss() {
    this.viewCtrl.dismiss({AddedGrp: this.groupe});
  }

}
