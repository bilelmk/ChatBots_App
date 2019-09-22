import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-ajouteremp',
  templateUrl: './cnlist.component.html',
  styleUrls: ['./cnlist.component.scss']
})
export class CnlistComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CnlistComponent> , @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
