import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {Groupe} from '../../classes/groupe';
import {GroupeService} from '../../services/groupes.service';

declare var $: any;

@Component({
  selector: 'app-ajouteremp',
  templateUrl: './ajoutergroupe.component.html',
  styleUrls: ['./ajoutergroupe.component.scss']
})
export class AjoutergroupeComponent implements OnInit {

  groupe = new Groupe() ;

   constructor(private groupeservice : GroupeService ,
               public dialogRef: MatDialogRef<AjoutergroupeComponent>) { }

  ngOnInit() {
  }

  ajouter(form : NgForm){
    this.groupe.name = form.value.nom;
    this.groupe.description = form.value.description  ;
    this.groupe.isActive =  form.value.active  ;
    console.log(this.groupe);


    this.groupeservice.postGroupe(this.groupe).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
    ) ;
    this.dialogRef.close();


  }



  ID(){
    return (new Date().getTime() + Math.floor((Math.random()*10000)+1))
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
