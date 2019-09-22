import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {GroupeService} from '../../services/groupes.service';
import {NotifService} from '../../services/notif.service';

declare var $: any;

@Component({
  selector: 'app-supprimeremp',
  templateUrl: './supprimergroupe.component.html',
  styleUrls: ['./supprimergroupe.component.scss']
})
export class SupprimergroupeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SupprimergroupeComponent>, @Inject(MAT_DIALOG_DATA) public data: number ,
              private groupeservice : GroupeService , private notif : NotifService) { }

  ngOnInit() {

  }

  supprimer(){
    this.groupeservice.DeleteGroupe(this.data).subscribe(
        (res) => {
          this.notif.showNotification('success' , 'Groupe Supprimé Avec Succès' ,'check_circle_outline' );
          this.dialogRef.close();
        }, (err) => {
          this.notif.showNotification('warning' , 'Opération De Suppression Echoué' , 'highlight_off')
        }
    ) ;


  }


}
