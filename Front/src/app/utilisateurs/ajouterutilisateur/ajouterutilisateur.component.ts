import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {Utilisateur} from '../../classes/utilisateur';
import {UtilisateurService} from '../../services/utilisateurs.service';
import {GroupeService} from '../../services/groupes.service';
import {Groupe} from '../../classes/groupe';

declare var $: any;

@Component({
  selector: 'app-ajouteremp',
  templateUrl: './ajouterutilisateur.component.html',
  styleUrls: ['./ajouterutilisateur.component.scss']
})
export class AjouterutilisateurComponent implements OnInit {

  utilisateur = new Utilisateur() ;
  groupes : Groupe[] ;
  constructor(private utilisateurservice : UtilisateurService ,
              private groupeservice : GroupeService ,
              public dialogRef: MatDialogRef<AjouterutilisateurComponent>,) { }

  ngOnInit() {
    this.groupeservice.getGroupes().subscribe(
        (res) => this.groupes = res
    )
  }

  ajouter(form : NgForm){
    this.utilisateur.username = form.value.username ;
    this.utilisateur.firstName = form.value.nom ;
    this.utilisateur.lastName =form.value.prenom ;
    this.utilisateur.email =form.value.mail ;
    this.utilisateur.matricule =form.value.matricule ;
    this.utilisateur.password = form.value.password ;
    this.utilisateur.isActive = form.value.isActive == true ;
    this.utilisateur.isAdminGroup  = form.value.admin  == true  ;
    this.utilisateur.isSuperUser=form.value.adminGrp  == true  ;
    let grp = new Groupe ;
    grp.id = form.value.groupe.id ;
    this.utilisateur.groupes.push(grp)

    this.utilisateurservice.postUser(this.utilisateur).subscribe(
        (res) => {
          this.showNotification('success' , 'Utilisateur Ajouter Avec Succès' ,'check_circle_outline' )

        },(err) => {
          this.showNotification('warning' , 'Opération D\'ajout Echoué' , 'highlight_off')
        }
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
