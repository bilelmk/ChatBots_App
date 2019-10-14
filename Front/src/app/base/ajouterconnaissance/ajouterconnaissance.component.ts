import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {Chatbot} from '../../classes/chatbot';
import {ChatbotsService} from '../../services/chatbots.service';
import {Connaissance} from '../../classes/connaissance';
import {ConnaissanceService} from '../../services/connaissance.service';
import {NotifService} from '../../services/notif.service';

@Component({
  selector: 'app-ajouteremp',
  templateUrl: './ajouterconnaissance.component.html',
  styleUrls: ['./ajouterconnaissance.component.scss']
})
export class AjouterconnaissanceComponent implements OnInit {

  chatbots : Chatbot[] ;
  cn= new Connaissance() ;
  constructor(public dialogRef: MatDialogRef<AjouterconnaissanceComponent> , private chatbotsService : ChatbotsService,
              private connaissanceservice : ConnaissanceService ,private notif : NotifService) { }

  ngOnInit() {
    this.chatbotsService.getChatbots().subscribe(
        (res) => this.chatbots = res
    )
  }


  ajouter(form : NgForm){
    this.cn.reponse = form.value.reponse  ;
    this.cn.question = form.value.question ;
    this.cn.isActive = form.value.active ;
    this.cn.admin = sessionStorage.getItem('username') ;
    this.cn.chatBots.push(form.value.bot)

    this.connaissanceservice.postConnaissance(this.cn).subscribe(
        (res) => {
          this.notif.showNotification('success' , 'Connaissance Ajouter Avec Succès' ,'check_circle_outline' );
          this.dialogRef.close();
        },(err) => {
          this.notif.showNotification('warning' , 'Opération D\'ajout Echoué' , 'highlight_off')
        }
    ) ;

  }

}
