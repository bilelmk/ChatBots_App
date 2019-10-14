import { Component, OnInit } from '@angular/core';
import {ConnectionService} from '../services/connection.service';
import { Router} from '@angular/router';
import {Utilisateur} from '../classes/utilisateur';
import {NotifService} from '../services/notif.service';
declare var $: any;


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

    utilisateur : Utilisateur ;
  constructor(private connectionService: ConnectionService, private router: Router ,
              private notif :NotifService) { }
  ngOnInit() {
  }

  login(form : any) {
      this.connectionService.login(form.value.username,form.value.password).subscribe(
          (res) => {
              this.utilisateur =  res ;
              this.router.navigate(['app']);

              sessionStorage.setItem('nom', res.firstName);
              sessionStorage.setItem('prenom', res.lastName);
              sessionStorage.setItem('id', res.id);
              sessionStorage.setItem('username', res.username);

              sessionStorage.setItem('admin', res.isSuperUser);
              sessionStorage.setItem('grp', res.isAdminGroup);


              this.notif.showNotification('success' , 'Connexion . . .' ,'check_circle_outline')

          }

          , (err) => {
              this.notif.showNotification('warning' , 'Nom d\'utilisateur ou Mot de passe incorrect' , 'highlight_off')          }
      )


  }






showNotification(from, align){
    const type = ['','info','success','warning','danger'];

    $.notify({
        icon: "notifications",
        message: " Still waiting to accept your sign up "
    },{
        type: type[3],
        timer: 4000,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-chatbot">close</i></button>' +
            '<i class="material-chatbot" data-notify="icon">notification</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
    });
}
showNotification1(from, align){
    const type = ['','info','success','warning','danger'];

    // const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: "notifications",
        message: " verify your password "
    },{
        type: type[3],
        timer: 4000,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-chatbot">close</i></button>' +
            '<i class="material-chatbot" data-notify="icon">error</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
    });
}

}
