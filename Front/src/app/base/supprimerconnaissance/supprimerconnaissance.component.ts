import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ConnaissanceService} from '../../services/connaissance.service';
import {NotifService} from '../../services/notif.service';

declare var $: any;

@Component({
  selector: 'app-supprimeremp',
  templateUrl: './supprimerconnaissance.component.html',
  styleUrls: ['./supprimerconnaissance.component.scss']
})
export class SupprimerconnaissanceComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SupprimerconnaissanceComponent>, @Inject(MAT_DIALOG_DATA) public data: number ,
              private cnservice : ConnaissanceService , private notif : NotifService) { }

  ngOnInit() {}

  supprimer(){
    this.cnservice.DeleteConnaissance(this.data).subscribe(
        (res) => {
          this.notif.showNotification('success' , 'Connaissance Supprimé Avec Succès' ,'check_circle_outline' );
          this.dialogRef.close();
        }, (err) => {
          this.notif.showNotification('warning' , 'Opération De Suppression Echoué' , 'highlight_off')
        })

  }

}
