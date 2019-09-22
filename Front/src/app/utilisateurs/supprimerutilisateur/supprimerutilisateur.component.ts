import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UtilisateurService} from '../../services/utilisateurs.service';
import {NotifService} from '../../services/notif.service';


@Component({
  selector: 'app-supprimeremp',
  templateUrl: './supprimerutilisateur.component.html',
  styleUrls: ['./supprimerutilisateur.component.scss']
})
export class SupprimerutilisateurComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SupprimerutilisateurComponent>, @Inject(MAT_DIALOG_DATA) public data: number ,
              private utilisateurservice : UtilisateurService , private notif : NotifService) { }

  ngOnInit() {

  }

  supprimer(){
    this.utilisateurservice.DeleteUser(this.data).subscribe(
      (res) => {
        this.notif.showNotification('success' , 'Utilisateur Supprimé Avec Succès' ,'check_circle_outline' );
        this.dialogRef.close();
      },
        (err) => {
          this.notif.showNotification('warning' , 'Opération De Suppression Echoué' , 'highlight_off')
      }

    ) ;

  }

}
