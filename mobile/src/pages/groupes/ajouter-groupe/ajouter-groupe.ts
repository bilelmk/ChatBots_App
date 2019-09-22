import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {GroupeProvider} from "../../../providers/groupe/groupe";
import {ChatbotProvider} from "../../../providers/chatbot/chatbot";
import {Chatbot} from "../../../classes/chatbot";
import {Groupe} from "../../../classes/groupe";

/**
 * Generated class for the AjouterGroupePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-groupe',
  templateUrl: 'ajouter-groupe.html',
})
export class AjouterGroupePage implements OnInit{

  groupe : Groupe = new Groupe() ;
  bots : Chatbot[] = null ;
  constructor(public navCtrl: NavController ,private loadingCtrl :LoadingController ,
              private grpprovider : GroupeProvider , private botprovider : ChatbotProvider , private viewCtrl : ViewController ,
              private toastCtrl : ToastController) {
  }

  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

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
            loading.dismiss() ;

          },
          (error) =>{
            let toast = this.toastCtrl.create({message: 'On ne peut pas atteindre le serveur',
              duration: 3000,
              position: 'bottom',
              cssClass : "fail" }) ;
            toast.present() ;
            loading.dismiss() ;

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
          loading.dismiss() ;

      }
    ) ;
  }

  Add(form){
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.groupe.name = form.value.nom ;
    this.groupe.description =form.value.description ;
    this.groupe.isActive = form.value.active === "" ;
    if(form.value.chatbot){
      this.groupe.chatBot = form.value.chatbot ;
    }else{
      this.groupe.chatBot = null ;
    }

    this.grpprovider.postGroupe(this.groupe).subscribe(
      (res) => {
        let toast = this.toastCtrl.create({message: 'Groupe ajouté avec succès',
          duration: 3000,
          position: 'bottom',
          cssClass : "succes" }) ;
        toast.present() ;
        loading.dismiss() ;
        form.reset();
        this.viewCtrl.dismiss({AddedGrp: res});
        },

      (err) => {
        let toast = this.toastCtrl.create({message: 'Erreur lors de l\'ajout',
          duration: 3000,
          position: 'bottom',
          cssClass : "fail" }) ;
        toast.present() ;
        loading.dismiss() ;
        this.groupe = new Groupe() ;
      }
    ) ;

  }

  dismiss() {
    this.viewCtrl.dismiss({AddedGrp: this.groupe});
  }
}
