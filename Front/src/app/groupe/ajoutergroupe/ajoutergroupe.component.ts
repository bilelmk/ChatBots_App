import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {Groupe} from '../../classes/groupe';
import {GroupeService} from '../../services/groupes.service';
import {ChatbotsService} from '../../services/chatbots.service';
import {Chatbot} from '../../classes/chatbot';
import {NotifService} from '../../services/notif.service';


@Component({
  selector: 'app-ajouteremp',
  templateUrl: './ajoutergroupe.component.html',
  styleUrls: ['./ajoutergroupe.component.scss']
})
export class AjoutergroupeComponent implements OnInit {

  groupe = new Groupe() ;
  chatbots : Chatbot[] ;

   constructor(private groupeservice : GroupeService , private chatbotsService : ChatbotsService ,
               public dialogRef: MatDialogRef<AjoutergroupeComponent> , private notif : NotifService) { }

  ngOnInit() {
    this.groupeservice.getGroupesBots().then(
        botsindex => {
          this.chatbotsService.getChatbots().subscribe(
              (res) => {
                this.chatbots = res.filter(
                    chb => {
                      return !botsindex.find((i)=> {
                        return (i == chb.id)
                      })
                    }
                )
              }
          )
        }
    ) ;
   }

  ajouter(form : NgForm){
    this.groupe.name = form.value.nom;
    this.groupe.description = form.value.description  ;
    this.groupe.isActive =  form.value.active  ;
    if(form.value.bot){
       this.groupe.chatBot = form.value.bot ;
    }else{
       this.groupe.chatBot = null ;
    }


    this.groupeservice.postGroupe(this.groupe).subscribe(
        (res) => {
            this.notif.showNotification('success' , 'Groupe Ajouter Avec Succès' ,'check_circle_outline' );
            this.dialogRef.close();
        },(err) => {
            console.log(err)
            this.notif.showNotification('warning' , 'Opération D\'ajout Echoué' , 'highlight_off')
        }
    ) ;

  }

}
