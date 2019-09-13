import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Groupe} from '../../classes/groupe';
import {UtilisateurService} from '../../services/utilisateurs.service';

declare var $: any;

@Component({
  selector: 'app-supprimeremp',
  templateUrl: './utilisateurgroupe.component.html',
  styleUrls: ['./utilisateurgroupe.component.scss']
})
export class UtilisateurgroupeComponent implements OnInit {

  userToAdd : number = null ;
  users = [] ;
  constructor(public dialogRef: MatDialogRef<UtilisateurgroupeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Groupe,
              private utilisateurservice : UtilisateurService ) { }


  ngOnInit() {

    this.utilisateurservice.getUsers().subscribe(
        (res) => {
          for (let user of res){
            if(!(this.data.users.find(
                us => {
                  return us.id == user.id
                }
            ))){
              this.users.push(user)
            }
          }
        }
    )
  }


  supprimer(userr , grp){
    let us = this.data.users.find(
        (res) => {
          return res.id == userr ;
        }
    );

    this.utilisateurservice.DeleteUserFromGroupe(userr,grp).subscribe(
        (res) => {
          this.users.push(us)
          this.data.users.splice(
              this.data.users.findIndex(
                  (res) => {
                    return res.id == userr ;
                  }
              ),1
          )
        },
    )
  }



  add(){
    let user = this.users.find(
        (res) => {
          return res.id == this.userToAdd ;
        }
    );
    this.utilisateurservice.AddUserToGroup(this.userToAdd, this.data).subscribe(
        (res) => {
          this.data.users.push(user);
          this.users = [] ;
          this.utilisateurservice.getUsers().subscribe(
              (res) => {
                for (let user of res){
                  if(!(this.data.users.find(
                      us => {
                        return us.id == user.id
                      }
                  ))){
                    this.users.push(user)
                  }
                }
              }
          )

        }
    )

  }




}
