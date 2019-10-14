import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Utilisateur} from '../../classes/utilisateur';
import {UtilisateurService} from '../../services/utilisateurs.service';
import {NotifService} from '../../services/notif.service';
import {Profil} from '../../classes/profil';
import {ProfilService} from '../../services/profil.service';

@Component({
  selector: 'app-modifieremp',
  templateUrl: './modifierutilisateur.component.html',
  styleUrls: ['./modifierutilisateur.component.scss']
})
export class ModifierutilisateurComponent implements OnInit {

  profils : Profil[] ;
  constructor(public dialogRef: MatDialogRef<ModifierutilisateurComponent>, @Inject(MAT_DIALOG_DATA) public data: Utilisateur,
              private utilisateurservice : UtilisateurService , private notif : NotifService ,
              private profilservice : ProfilService ) { }

  ngOnInit() {
      this.profilservice.getProfils().subscribe(
          (res) => this.profils = res
      )
  }

  modifier(){
    this.utilisateurservice.putUser(this.data).subscribe(
        (res) => {
          this.notif.showNotification('success' , 'Utilisateur Modifié Avec Succès' ,'check_circle_outline' );
          this.dialogRef.close();
        },
        (err ) => {

            this.notif.showNotification('warning' , 'Opération De Modification Echoué' , 'highlight_off')
        }
    ) ;
  }




}
