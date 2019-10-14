import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Connaissance} from '../../classes/connaissance';
import {ConnaissanceService} from '../../services/connaissance.service';
import {NotifService} from '../../services/notif.service';


@Component({
  selector: 'app-modifieremp',
  templateUrl: './modifierconnaissance.component.html',
  styleUrls: ['./modifierconnaissance.component.scss']
})
export class ModifierconnaissanceComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ModifierconnaissanceComponent>, @Inject(MAT_DIALOG_DATA) public data: Connaissance,
              private cnservice : ConnaissanceService ,private notif : NotifService) { }

  ngOnInit() {
  }

  modifier(){

    this.cnservice.putConnaissance(this.data).subscribe(
        (res)=> {
          this.notif.showNotification('success' , 'Connaissance Modifié Avec Succès' ,'check_circle_outline' );
          this.dialogRef.close();
        },
        (err) => {
          this.notif.showNotification('warning' , 'Opération De Modification Echoué' , 'highlight_off')
        }
    ) ;

  }







}
