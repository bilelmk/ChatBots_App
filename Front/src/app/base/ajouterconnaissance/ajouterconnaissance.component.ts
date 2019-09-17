import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {Chatbot} from '../../classes/chatbot';
import {ChatbotsService} from '../../services/chatbots.service';
import {Connaissance} from '../../classes/connaissance';
import {ConnaissanceService} from '../../services/connaissance.service';


declare var $: any;

@Component({
  selector: 'app-ajouteremp',
  templateUrl: './ajouterconnaissance.component.html',
  styleUrls: ['./ajouterconnaissance.component.scss']
})
export class AjouterconnaissanceComponent implements OnInit {

  chatbots : Chatbot[] ;
  cn= new Connaissance() ;
  constructor(public dialogRef: MatDialogRef<AjouterconnaissanceComponent> , private chatbotsService : ChatbotsService,
              private connaissanceservice : ConnaissanceService) { }

  ngOnInit() {
    this.chatbotsService.getChatbots().subscribe(
        (res) => this.chatbots = res
    )
  }


  ajouter(form : NgForm){
    this.cn.reponse = form.value.reponse  ;
    this.cn.question = form.value.question ;
    this.cn.chatBots.push(form.value.bot)

    this.connaissanceservice.postConnaissance(this.cn).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
    ) ;
    this.dialogRef.close();


  }



  showNotification(color,msg,icon){
    $.notify({
      icon: icon,
      message: msg

    },{
      type: color,
      timer: 4000,
      placement: {
        from: 'bottom',
        align:'center'
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss"><i class="material-chatbot">close</i></button>' +
          '<i class="material-chatbot" data-notify="icon">'+icon+'</i>' +
          '<span data-notify="title">{1}</span>' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
    });
  }
}
