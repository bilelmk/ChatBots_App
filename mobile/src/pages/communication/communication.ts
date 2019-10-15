import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Utilisateur} from "../../classes/utilisateur";
import {Groupe} from "../../classes/groupe";
import {Chatbot} from "../../classes/chatbot";
import {UtilisateurProvider} from "../../providers/utilisateur/utilisateur";
import { Storage } from "@ionic/storage" ;
import {SansReponse} from "../../classes/SansReponse";
import {SansreponseProvider} from "../../providers/sansreponse/sansreponse";

/**
 * Generated class for the CommunicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-communication',
  templateUrl: 'communication.html',
})
export class CommunicationPage implements  OnInit{

  Utilisateur: Utilisateur;
  discution = [];
  groupes: Groupe[];
  selectedBot: Chatbot = null;

  constructor(public navCtrl: NavController, public navParams: NavParams , private utilisateurprovider : UtilisateurProvider ,
              private storage : Storage , private loadingCtrl : LoadingController , private toastCtrl : ToastController ,
              private sansrepprovider : SansreponseProvider) {
  }

  selectMsg() :string{
    if(this.selectedBot === null){
      return 'Choisir un groupe'
    }
    else if(this.selectedBot.name === undefined){
      return 'Ce groupe n\'a pas un chatbot ' ;
    }
    else{
      return this.selectedBot.name
    }
  }

  existBot() :boolean{
    if(this.selectedBot === null){
      return false
    }
    else if(this.selectedBot.name === undefined){
      return false ;
    }
    else{
      return true
    }
  }

  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    let id ;

    this.storage.get('user').then(
      (resp) => {
        if( resp != null){
          id = resp.id ;
          this.utilisateurprovider.getUsers().subscribe(
            (res) => {
              this.Utilisateur = res.find(
                (user) => {
                  return user.id === Number(id)
                }
              ) ;
              this.groupes = this.Utilisateur.groupes ;
              loading.dismiss()

            },
            (err) => {
                let toast = this.toastCtrl.create({message: 'On ne peut pas atteindre le serveur',
                  duration: 3000,
                  position: 'bottom',
                  cssClass : "fail" }) ;
                toast.present() ;
              loading.dismiss()
            }
          )
        }
      });


  }

  msg(input : any){
    if(input.value != ""){
      let question ={
        content : input.value ,
        sender : "me"
      };
      this.discution.push(question) ;

      let content = this.selectedBot.knowledgeBases.find(
        (cn) => {
          return (cn.question.toLowerCase().trim() == input.value.toLowerCase().trim() && cn.isActive)
        }
      ) ;
      if(content == undefined){
        let reponse ={
          content : 'Pas De Reponse',
          sender : "you"
        };
        let SansRep = new SansReponse() ;
        SansRep.question = input.value ;
        SansRep.name = this.selectedBot.name ;
        this.sansrepprovider.postSansRepQuestion(SansRep).subscribe(
          res => console.log(res) ,
          err => console.log (err)
        )
        this.discution.push(reponse) ;
      }else{
        let reponse ={
          content : content.reponse,
          sender : "you"
        };

        this.discution.push(reponse) ;
      }
      input.value = null ;
    }


  }


}


