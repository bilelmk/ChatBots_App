import {Component, OnInit} from '@angular/core';
import {UtilisateurService} from '../services/utilisateurs.service';
import {Utilisateur} from '../classes/utilisateur';
import {Chatbot} from '../classes/chatbot';
import {Groupe} from '../classes/groupe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  Utilisateur : Utilisateur ;
  discution =[] ;
  groupes : Groupe[] ;
  selectedBot : Chatbot = null ;
  constructor(private  utilisateurservice :UtilisateurService) {
  }

  ngOnInit() {
    let id = sessionStorage.getItem('id')
    this.utilisateurservice.getUsers().subscribe(
        (res) => {
          this.Utilisateur = res.find(
              (user) => {
                return user.id === Number(id)
              }
          ) ;
          console.log(this.Utilisateur)
          this.groupes = this.Utilisateur.groupes ;
        }
    )
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
