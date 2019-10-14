import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProfilService} from '../../services/profil.service';
import {NotifService} from '../../services/notif.service';


@Component({
  selector: 'app-supprimeremp',
  templateUrl: './supprimerprofil.component.html',
  styleUrls: ['./supprimerprofil.component.scss']
})
export class SupprimerprofilComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SupprimerprofilComponent>, @Inject(MAT_DIALOG_DATA) public data: number ,
              private profilservice : ProfilService , private notif : NotifService) { }

  ngOnInit() {

  }

  supprimer(){
    this.profilservice.DeleteProfil(this.data).subscribe(
        (res) => {
          this.notif.showNotification('success' , 'Profil Supprimé Avec Succès' ,'check_circle_outline' );
          this.dialogRef.close();
        },
        (err) => {
          this.notif.showNotification('warning' , 'Opération De Suppression Echoué' , 'highlight_off')
        })

  }

}
