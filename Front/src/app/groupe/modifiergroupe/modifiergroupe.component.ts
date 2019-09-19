import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {GroupeService} from '../../services/groupes.service';
import {Groupe} from '../../classes/groupe';
import {Chatbot} from '../../classes/chatbot';
import {ChatbotsService} from '../../services/chatbots.service';
declare var $: any;

@Component({
  selector: 'app-modifieremp',
  templateUrl: './modifiergroupe.component.html',
  styleUrls: ['./modifiergroupe.component.scss']
})
export class ModifiergroupeComponent implements OnInit {

  chatbots : Chatbot[] ;

  constructor(public dialogRef: MatDialogRef<ModifiergroupeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Groupe, private chatbotsService : ChatbotsService ,
              private groupeService : GroupeService) { }

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
                )
                  this.chatbots.push(this.data.chatBot)
              }
          )
        }
    ) ;
  }

  modifier(){
      console.log(this.data)
      this.groupeService.putGroupe(this.data).subscribe(
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
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-chatbot">close</i></button>' +
          '<i class="material-chatbot" data-notify="icon">'+icon+'</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
    });
  }
}
