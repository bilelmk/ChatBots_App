import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ChatbotsService} from '../../services/chatbots.service';
import {Chatbot} from '../../classes/chatbot';
import {NotifService} from '../../services/notif.service';

@Component({
  selector: 'app-modifieremp',
  templateUrl: './modifierchatbot.component.html',
  styleUrls: ['./modifierchatbot.component.scss']
})
export class ModifierchatbotComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ModifierchatbotComponent>, @Inject(MAT_DIALOG_DATA) public data: Chatbot,
              private chatbotservice : ChatbotsService , private notif : NotifService
  ) { }

  ngOnInit() {
    console.log(this.data)
  }

  modifier(){
    this.chatbotservice.putChatbots(this.data).subscribe(
        (res)=> {
          this.notif.showNotification('success' , 'Chattbot Modifié Avec Succès' ,'check_circle_outline' );
          this.dialogRef.close();
        },
        (err) => {
          this.notif.showNotification('warning' , 'Opération De Modification Echoué' , 'highlight_off')
        }
    ) ;

  }

}
