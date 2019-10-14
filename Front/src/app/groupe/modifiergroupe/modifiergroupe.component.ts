import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {GroupeService} from '../../services/groupes.service';
import {Groupe} from '../../classes/groupe';
import {Chatbot} from '../../classes/chatbot';
import {ChatbotsService} from '../../services/chatbots.service';
import {NotifService} from '../../services/notif.service';

@Component({
  selector: 'app-modifieremp',
  templateUrl: './modifiergroupe.component.html',
  styleUrls: ['./modifiergroupe.component.scss']
})
export class ModifiergroupeComponent implements OnInit {

  chatbots : Chatbot[] ;

  constructor(public dialogRef: MatDialogRef<ModifiergroupeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Groupe, private chatbotsService : ChatbotsService ,
              private groupeService : GroupeService , private notif : NotifService) { }

  ngOnInit() {
    this.groupeService.getGroupesBots().then(
        botsindex => {
          this.chatbotsService.getChatbots().subscribe(
              (res) => {
                this.chatbots = res.filter(
                    chb => {
                      return !botsindex.find((i)=> {
                        return (i == chb.id)
                      })
                    }
                );
                  this.chatbots.push(this.data.chatBot)
              }
          )
        }
    ) ;
  }

  modifier(){
      this.groupeService.putGroupe(this.data).subscribe(
          (res)=> {
              this.notif.showNotification('success' , 'Groupe Modifié Avec Succès' ,'check_circle_outline' );
              this.dialogRef.close();
          },
          (err) => {
              this.notif.showNotification('warning' , 'Opération De Modification Echoué' , 'highlight_off')
          }
  ) ;
  }




}
