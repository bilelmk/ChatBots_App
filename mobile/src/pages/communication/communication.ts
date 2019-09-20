import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Utilisateur} from "../../classes/utilisateur";
import {Groupe} from "../../classes/groupe";
import {Chatbot} from "../../classes/chatbot";
import {UtilisateurProvider} from "../../providers/utilisateur/utilisateur";
import { Storage } from "@ionic/storage" ;

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
              private storage : Storage) {
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
          return cn.question.toLowerCase().trim() == input.value.toLowerCase().trim()
        }
      ) ;
      if(content == undefined){
        let reponse ={
          content : 'Pas De Reponse',
          sender : "you"
        };

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


