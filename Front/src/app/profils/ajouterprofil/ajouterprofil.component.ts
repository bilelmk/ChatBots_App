import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {Profil} from '../../classes/profil';
import {Permission} from '../../classes/permission';
import {ProfilService} from '../../services/profil.service';
import {NotifService} from '../../services/notif.service';

declare var $: any;

@Component({
  selector: 'app-ajouteremp',
  templateUrl: './ajouterprofil.component.html',
  styleUrls: ['./ajouterprofil.component.scss']
})
export class AjouterprofilComponent implements OnInit {
  userAdd : boolean ;
  userUp : boolean ;
  userDel : boolean ;
  userCom : boolean ;

  profilAdd : boolean ;
  profilUp : boolean ;
  profilDel : boolean ;
  profilCom : boolean ;

  grpAdd : boolean ;
  grpUp : boolean ;
  grpDel : boolean ;
  grpCom : boolean ;

  botAdd : boolean ;
  botUp : boolean ;
  botDel : boolean ;
  botCom : boolean ;

  baseAdd : boolean ;
  baseUp : boolean ;
  baseDel : boolean ;
  baseCom : boolean ;

  constructor(public dialogRef: MatDialogRef<AjouterprofilComponent> , private profilservice : ProfilService ,
              private notif : NotifService) { }

  ngOnInit() {
  }

  ajouter(form : NgForm){
    let profil = new Profil ;
    profil.name = form.value.nom ;
    profil.description = form.value.description ;

    /******* User ********/
    if(this.userAdd){
      let p = new Permission  ;
      p.permission = "ADD" ;
      p.role ="USER" ;
      profil.permisRoles.push(p)
    }

    if(this.userUp){
      let p = new Permission ;
      p.permission = "WRITE" ;
      p.role = "USER" ;
      profil.permisRoles.push(p)
    }

    if(this.userDel){
      let p = new Permission ;
      p.permission = "DELETE" ;
      p.role = "USER" ;
      profil.permisRoles.push(p)
    }

    if(this.userCom){
      let p = new Permission ;
      p.permission = "READ" ;
      p.role = "USER" ;
      profil.permisRoles.push(p)
    }


    /******* Profil ********/

    if(this.profilAdd){
      let p = new Permission ;
      p.permission = "ADD" ;
      p.role = "PROFIL" ;
      profil.permisRoles.push(p)
    }

    if(this.profilUp){
      let p = new Permission ;
      p.permission = "WRITE" ;
      p.role = "PROFIL" ;
      profil.permisRoles.push(p)
    }

    if(this.profilDel){
      let p = new Permission ;
      p.permission = "DELETE" ;
      p.role = "PROFIL" ;
      profil.permisRoles.push(p)
    }

    if(this.profilCom){
      let p = new Permission ;
      p.permission = "READ" ;
      p.role = "PROFIL" ;
      profil.permisRoles.push(p)
    }


    /********* Groupe **********/
    if(this.grpAdd){
      let p = new Permission ;
      p.permission = "ADD" ;
      p.role = "GROUP" ;
      profil.permisRoles.push(p)
    }

    if(this.grpUp){
      let p = new Permission ;
      p.permission = "WRITE" ;
      p.role = "GROUP" ;
      profil.permisRoles.push(p)
    }

    if(this.grpDel){
      let p = new Permission ;
      p.permission = "DELETE" ;
      p.role = "GROUP" ;
      profil.permisRoles.push(p)
    }

    if(this.grpCom){
      let p = new Permission ;
      p.permission = "READ" ;
      p.role = "GROUP" ;
      profil.permisRoles.push(p)
    }



    /********* Bot **********/
    if(this.botAdd){
      let p = new Permission ;
      p.permission = "ADD" ;
      p.role = "CHATBOT" ;
      profil.permisRoles.push(p)
    }

    if(this.botUp){
      let p = new Permission ;
      p.permission = "WRITE" ;
      p.role = "CHATBOT" ;
      profil.permisRoles.push(p)
    }

    if(this.botDel){
      let p = new Permission ;
      p.permission = "DELETE" ;
      p.role = "CHATBOT" ;
      profil.permisRoles.push(p)
    }

    if(this.botCom){
      let p = new Permission ;
      p.permission = "READ" ;
      p.role = "CHATBOT" ;
      profil.permisRoles.push(p)
    }


    /********* Connaissance **********/
    if(this.baseAdd){
      let p = new Permission ;
      p.permission = "ADD" ;
      p.role ="BASE_CONNAISSANCE" ;
      profil.permisRoles.push(p)
    }

    if(this.baseUp){
      let p = new Permission ;
      p.permission = "WRITE" ;
      p.role ="BASE_CONNAISSANCE" ;
      profil.permisRoles.push(p)
    }

    if(this.baseDel){
      let p = new Permission ;
      p.permission = "DELETE" ;
      p.role ="BASE_CONNAISSANCE" ;
      profil.permisRoles.push(p)
    }

    if(this.baseCom){
      let p = new Permission ;
      p.permission = "READ" ;
      p.role ="BASE_CONNAISSANCE" ;
      profil.permisRoles.push(p)
    }

    this.profilservice.postProfil(profil).subscribe(
        (res) => {
          this.notif.showNotification('success' , 'Profil Ajouter Avec Succès' ,'check_circle_outline' );
          this.dialogRef.close();
        },(err) => {
          this.notif.showNotification('warning' , 'Opération D\'ajout Echoué' , 'highlight_off')
        }
    );



  }



}
