import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-professor-profile',
  templateUrl: './professor-profile.component.html',
  styleUrls: ['./professor-profile.component.scss']
})
export class ProfessorProfileComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private router: Router) { }

  ngOnInit() {

  }


  Logout() {
    sessionStorage.removeItem('user');
    this.router.navigate(['']);
  }



}
