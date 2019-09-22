import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ChatbotsService} from '../../services/chatbots.service';
import {NotifService} from '../../services/notif.service';


@Component({
  selector: 'app-supprimeremp',
  templateUrl: './supprimerchatbot.component.html',
  styleUrls: ['./supprimerchatbot.component.scss']
})
export class SupprimerchatbotComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SupprimerchatbotComponent>, @Inject(MAT_DIALOG_DATA) public data: number ,
              private chatbotservice : ChatbotsService , private notif : NotifService) { }

  ngOnInit() {

  }

  supprimer(){
    this.chatbotservice.DeleteChatbots(this.data).subscribe(
        (res) => {
          this.notif.showNotification('success' , 'Chatbot Supprimé Avec Succès' ,'check_circle_outline' );
          this.dialogRef.close();
        }, (err) => {
          this.notif.showNotification('warning' , 'Opération De Suppression Echoué' , 'highlight_off')
        })

  }



}
