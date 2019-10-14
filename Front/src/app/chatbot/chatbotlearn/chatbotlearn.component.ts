import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Chatbot} from '../../classes/chatbot';
import {ChatbotsService} from '../../services/chatbots.service';
import {ConnaissanceService} from '../../services/connaissance.service';
import {NotifService} from '../../services/notif.service';


@Component({
  selector: 'app-ajouteremp',
  templateUrl: './chatbotlearn.component.html',
  styleUrls: ['./chatbotlearn.component.scss']
})
export class ChatbotlearnComponent implements OnInit {

  cnToAdd : number = null ;
  cns = [] ;
  constructor(public dialogRef: MatDialogRef<ChatbotlearnComponent> , @Inject(MAT_DIALOG_DATA) public data: Chatbot,
              private chatbotservice : ChatbotsService , private cnservice : ConnaissanceService ,
              private notif : NotifService) { }

  ngOnInit() {
    this.cnservice.getConnaissances().subscribe(
        (res) => {
          for (let cn of res){
            if(!(this.data.knowledgeBases.find(
                us => {
                  return us.id == cn.id
                }
            ))){
              this.cns.push(cn)
            }
          }
        }
    )
  }


  supprimer(connaissance , bot){
    let cn = this.data.knowledgeBases.find(
        (res) => {
          return res.id == connaissance ;
        }
    );

    this.cnservice.DeleteCnFromBot(connaissance,bot).subscribe(
        (res) => {
          this.cns.push(cn)
          this.data.knowledgeBases.splice(
              this.data.knowledgeBases.findIndex(
                  (res) => {
                    return res.id == connaissance ;
                  }
              ),1
          )
            this.notif.showNotification('success' , 'Connaissance Supprimé Avec Succès' ,'check_circle_outline' );
        }, (err) => {
            this.notif.showNotification('warning' , 'Opération De Suppression Echoué' , 'highlight_off')
        })
  }


  add(){
    let cn = this.cns.find(
        (res) => {
          return res.id == this.cnToAdd ;
        }
    );
    this.cnservice.AddCnToBot(this.cnToAdd, this.data.id).subscribe(
        (res) => {
          this.data.knowledgeBases.push(cn);
          this.cns = [] ;
          this.cnservice.getConnaissances().subscribe(
              (res) => {
                for (let cn of res){
                  if(!(this.data.knowledgeBases.find(
                      us => {
                        return us.id == cn.id
                      }
                  ))){
                    this.cns.push(cn)
                  }
                }
              }
          );
            this.notif.showNotification('success' , 'Connaissance Ajouter Avec Succès' ,'check_circle_outline' );
        },
        (err) => {
            this.notif.showNotification('warning' , 'Opération D\'ajout Echoué' , 'highlight_off')
        }
    )

  }



}
