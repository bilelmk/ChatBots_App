import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {BaseProvider} from "../../../providers/base/base";
import {UtilisateurProvider} from "../../../providers/utilisateur/utilisateur";
import {Groupe} from "../../../classes/groupe";

/**
 * Generated class for the UserGroupePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-groupe',
  templateUrl: 'user-groupe.html',
})
export class UserGroupePage implements OnInit{


  userToAdd : number = null ;
  users = [] ;
  data : Groupe ;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private loadingCtrl :LoadingController
              , private toastCtrl: ToastController , private viewCtrl : ViewController ,
               private utilisateurservice : UtilisateurProvider) {
  }

  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content: " Loading . . . . "
    });
    loading.present();

    this.data = this.navParams.get('groupe') ;

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
      },
      (err) => {
        let toast = this.toastCtrl.create({message: 'On ne peut pas atteindre le serveur',
          duration: 3000,
          position: 'bottom',
          cssClass : "fail" }) ;
        toast.present() ;
      }
    );

    loading.dismiss();
  }


  supprimer(userr , grp){
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    let us = this.data.users.find(
      (res) => {
        return res.id == userr ;
      }
    );

    this.utilisateurservice.DeleteUserFromGroupe(userr,grp).subscribe(
      (res) => {
        this.users.push(us);
        this.data.users.splice(
          this.data.users.findIndex(
            (res) => {
              return res.id == userr ;
            }
          ),1
        );
        loading.dismiss()
        let toast = this.toastCtrl.create({message: 'Utilisateur ajouté avec succès',
          duration: 3000,
          position: 'bottom',
          cssClass : "succes" }) ;
        toast.present() ;
      },
      (err) => {
        loading.dismiss()
        let toast = this.toastCtrl.create({message: 'Erreur lors suppression ',
          duration: 3000,
          position: 'bottom',
          cssClass : "fail" }) ;
        toast.present() ;
      }

    )
  }



  add(){
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

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
            this.userToAdd  = null ;
            loading.dismiss() ;
            let toast = this.toastCtrl.create({message: 'Utilisateur ajouté avec succès',
              duration: 3000,
              position: 'bottom',
              cssClass : "succes" }) ;
            toast.present() ;
          }
        )},
      (err) => {
        loading.dismiss() ;
        let toast = this.toastCtrl.create({message: 'Erreur lors l\'ajout ',
          duration: 3000,
          position: 'bottom',
          cssClass : "fail" }) ;
        toast.present() ;
      }

      )

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
