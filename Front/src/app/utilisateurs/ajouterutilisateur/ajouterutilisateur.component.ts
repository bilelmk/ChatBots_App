import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {Utilisateur} from '../../classes/utilisateur';
import {UtilisateurService} from '../../services/utilisateurs.service';
import {GroupeService} from '../../services/groupes.service';
import {Groupe} from '../../classes/groupe';
import {ProfilService} from '../../services/profil.service';
import {Profil} from '../../classes/profil';
import {NotifService} from '../../services/notif.service';


@Component({
  selector: 'app-ajouteremp',
  templateUrl: './ajouterutilisateur.component.html',
  styleUrls: ['./ajouterutilisateur.component.scss']
})
export class AjouterutilisateurComponent implements OnInit {

  utilisateur = new Utilisateur() ;
  groupes : Groupe[] ;
  profils : Profil[] ;
  constructor(private utilisateurservice : UtilisateurService , private groupeservice : GroupeService ,
              private profilservice : ProfilService , private notif : NotifService ,
              public dialogRef: MatDialogRef<AjouterutilisateurComponent>,) { }

  ngOnInit() {
    this.profilservice.getProfils().subscribe(
        (res) => this.profils = res
    )
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
    this.utilisateur.profil = form.value.profil ;
    let grp = new Groupe ;
    grp.id = form.value.groupe.id ;
    this.utilisateur.groupes.push(grp)

    this.utilisateurservice.postUser(this.utilisateur).subscribe(
        (res) => {
          this.notif.showNotification('success' , 'Utilisateur Ajouter Avec Succès' ,'check_circle_outline' );
          this.dialogRef.close();
        },(err) => {
          this.notif.showNotification('warning' , 'Opération D\'ajout Echoué' , 'highlight_off')
        }
  ) ;
  }


}
