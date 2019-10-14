import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {Chatbot} from '../../classes/chatbot';
import {ChatbotsService} from '../../services/chatbots.service';
import {NotifService} from '../../services/notif.service';


@Component({
  selector: 'app-ajouteremp',
  templateUrl: './ajouterchatbot.component.html',
  styleUrls: ['./ajouterchatbot.component.scss']
})
export class AjouterchatbotComponent implements OnInit {

  bot = new Chatbot ;

  constructor(public dialogRef: MatDialogRef<AjouterchatbotComponent> , private chatbotservice : ChatbotsService ,
              private notif : NotifService) { }

  ngOnInit() {
  }

  fileSelect(event){
      let img = event.target.files[0]
      const fd = new FormData()
      fd.append('image' , img ,img.name)
      console.log(fd)
      // this.bot.image = fd ;

  }

  ajouter(form : NgForm){
    this.bot.name = form.value.nom;
    this.bot.description = form.value.description  ;
    this.bot.isActive =  form.value.active  ;
    // console.log(this.bot)


    this.chatbotservice.postChatbots(this.bot).subscribe(
        (res) => {
          this.notif.showNotification('success' , 'Chatbot Ajouter Avec Succès' ,'check_circle_outline' );
          this.dialogRef.close();
        },(err) => {
            console.log(err)
          this.notif.showNotification('warning' , 'Opération D\'ajout Echoué' , 'highlight_off')
        }
    ) ;

  }

}
