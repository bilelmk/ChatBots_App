import {Component, OnInit} from '@angular/core';
import {UtilisateurService} from '../services/utilisateurs.service';
import {Utilisateur} from '../classes/utilisateur';
import {Chatbot} from '../classes/chatbot';
import {Groupe} from '../classes/groupe';
import {SansrepService} from '../services/sansrep.service';
import {SansReponse} from '../classes/SansReponse';
declare let gtag:Function;


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
  constructor(private  utilisateurservice :UtilisateurService , private sansrepservice : SansrepService) {

  }
    public eventEmitter(
        eventName: string,
        eventCategory: string,
        eventAction: string,
        eventLabel: string = null,
        eventValue: number = null ){
        gtag('event', eventName, {
            eventCategory: eventCategory,
            eventLabel: eventLabel,
            eventAction: eventAction,
            eventValue: eventValue
        })
    }

    SendAddToCartEvent(){
        this.eventEmitter("add_to_cart", "shop", "cart", "click", 10);
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
              this.sansrepservice.postSansRepQuestion(SansRep).subscribe(
                  res => console.log(res) ,
                  err => console.log (err)
              )

              this.eventEmitter("Pas de Reponse", "shop", "cart", "click", 10);
              this.discution.push(reponse) ;
          }else{
              let reponse ={
                  content : content.reponse,
                  sender : "you"
              };
              this.eventEmitter("Il y'a Reponse", "shop", "cart", "click", 10);
              this.discution.push(reponse) ;
          }
          input.value = null ;
      }


  }

}
