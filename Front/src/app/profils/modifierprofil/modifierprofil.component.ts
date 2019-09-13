import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Profil} from '../../classes/profil';
import {ProfilService} from '../../services/profil.service';
declare var $: any;

@Component({
  selector: 'app-modifieremp',
  templateUrl: './modifierprofil.component.html',
  styleUrls: ['./modifierprofil.component.scss']
})
export class ModifierprofilComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ModifierprofilComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Profil,
              profilseroive : ProfilService
  ) { }

  ngOnInit() {
    console.log(this.data)
  }

  modifier(){
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
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">'+icon+'</i> ' +
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
