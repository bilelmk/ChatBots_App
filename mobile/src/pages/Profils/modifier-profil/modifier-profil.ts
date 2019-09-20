import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {Profil} from "../../../classes/profil";
import {NgForm} from "@angular/forms";
import {Permission} from "../../../classes/permission";
import {ProfilProvider} from "../../../providers/profil/profil";

/**
 * Generated class for the ModifierProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifier-profil',
  templateUrl: 'modifier-profil.html',
})
export class ModifierProfilPage implements OnInit{

  data : Profil ;
  InitProfil = new Profil ;

  userAdd : boolean ;
  userUp : boolean ;
  userDel : boolean ;
  userCom : boolean ;

  profilAdd : boolean ;
  profilUp : boolean ;
  profilDel : boolean ;
  profilCom : boolean ;

  grpAdd : boolean ;
  grpUp : boolean ;
  grpDel : boolean ;
  grpCom : boolean ;

  botAdd : boolean ;
  botUp : boolean ;
  botDel : boolean ;
  botCom : boolean ;

  baseAdd : boolean ;
  baseUp : boolean ;
  baseDel : boolean ;
  baseCom : boolean ;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl :ViewController ,
              private loadingCtrl : LoadingController , private toastCtrl: ToastController ,
              private profilprovider : ProfilProvider) {}


  ngOnInit(): void {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.data = this.navParams.get('profil');

    this.InitProfil.id =  this.data.id;
    this.InitProfil.name =  this.data.name;
    this.InitProfil.description =  this.data.description;
    this.InitProfil.isActive =  this.data.isActive;
    this.InitProfil.users =  this.data.users;
    this.InitProfil.permisRoles =  this.data.permisRoles;



    this.userAdd = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'ADD' && p.role == 'USER')
      }) != -1 ;

    this.userUp = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'WRITE' && p.role == 'USER')
      }) != -1 ;

    this.userDel = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'DELETE' && p.role == 'USER')
      }) != -1 ;

    this.userCom = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'READ' && p.role == 'USER')
      }) != -1 ;

    this.profilAdd = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'ADD' && p.role == 'PROFIL')
      }) != -1 ;

    this.profilUp   = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'WRITE' && p.role == 'PROFIL')
      }) != -1 ;

    this.profilDel   = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'DELETE' && p.role == 'PROFIL')
      }) != -1 ;

    this.profilCom  = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'READ' && p.role == 'PROFIL')
      }) != -1 ;


    this.grpAdd   = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'ADD' && p.role == 'GROUP')
      }) != -1 ;

    this.grpUp   = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'WRITE' && p.role == 'GROUP')
      }) != -1 ;

    this.grpDel   = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'DELETE' && p.role == 'GROUP')
      }) != -1 ;


    this.grpCom   = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'READ' && p.role == 'GROUP')
      }) != -1 ;

    this.botAdd   = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'ADD' && p.role == 'CHATBOT')
      }) != -1 ;

    this.botUp   = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'WRITE' && p.role == 'CHATBOT')
      }) != -1 ;

    this.botDel   = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'DELETE' && p.role == 'CHATBOT')
      }) != -1 ;

    this.botCom  = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'READ' && p.role == 'CHATBOT')
      }) != -1 ;


    this.baseAdd   = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'ADD' && p.role == 'BASE_CONNAISSANCE')
      }) != -1 ;

    this.baseUp  = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'WRITE' && p.role == 'BASE_CONNAISSANCE')
      }) != -1 ;


    this.baseDel   = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'DELETE' && p.role == 'BASE_CONNAISSANCE')
      }) != -1 ;


    this.baseCom   = this.data.permisRoles.findIndex(
      (p) => {
        return (p.permission == 'READ' && p.role == 'BASE_CONNAISSANCE')
      }) != -1 ;

    loading.dismiss()
  }


  modifier(form : NgForm){
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    /******* User ********/
    if(this.userAdd){
      let p = new Permission  ;
      p.permission = "ADD" ;
      p.role ="USER" ;
      this.data.permisRoles.push(p)
    }

    if(this.userUp){
      let p = new Permission ;
      p.permission = "WRITE" ;
      p.role = "USER" ;
      this.data.permisRoles.push(p)
    }

    if(this.userDel){
      let p = new Permission ;
      p.permission = "DELETE" ;
      p.role = "USER" ;
      this.data.permisRoles.push(p)
    }

    if(this.userCom){
      let p = new Permission ;
      p.permission = "READ" ;
      p.role = "USER" ;
      this.data.permisRoles.push(p)
    }


    /******* Profil ********/

    if(this.profilAdd){
      let p = new Permission ;
      p.permission = "ADD" ;
      p.role = "PROFIL" ;
      this.data.permisRoles.push(p)
    }

    if(this.profilUp){
      let p = new Permission ;
      p.permission = "WRITE" ;
      p.role = "PROFIL" ;
      this.data.permisRoles.push(p)
    }

    if(this.profilDel){
      let p = new Permission ;
      p.permission = "DELETE" ;
      p.role = "PROFIL" ;
      this.data.permisRoles.push(p)
    }

    if(this.profilCom){
      let p = new Permission ;
      p.permission = "READ" ;
      p.role = "PROFIL" ;
      this.data.permisRoles.push(p)
    }


    /********* Groupe **********/
    if(this.grpAdd){
      let p = new Permission ;
      p.permission = "ADD" ;
      p.role = "GROUP" ;
      this.data.permisRoles.push(p)
    }

    if(this.grpUp){
      let p = new Permission ;
      p.permission = "WRITE" ;
      p.role = "GROUP" ;
      this.data.permisRoles.push(p)
    }

    if(this.grpDel){
      let p = new Permission ;
      p.permission = "DELETE" ;
      p.role = "GROUP" ;
      this.data.permisRoles.push(p)
    }

    if(this.grpCom){
      let p = new Permission ;
      p.permission = "READ" ;
      p.role = "GROUP" ;
      this.data.permisRoles.push(p)
    }



    /********* Bot **********/
    if(this.botAdd){
      let p = new Permission ;
      p.permission = "ADD" ;
      p.role = "CHATBOT" ;
      this.data.permisRoles.push(p)
    }

    if(this.botUp){
      let p = new Permission ;
      p.permission = "WRITE" ;
      p.role = "CHATBOT" ;
      this.data.permisRoles.push(p)
    }

    if(this.botDel){
      let p = new Permission ;
      p.permission = "DELETE" ;
      p.role = "CHATBOT" ;
      this.data.permisRoles.push(p)
    }

    if(this.botCom){
      let p = new Permission ;
      p.permission = "READ" ;
      p.role = "CHATBOT" ;
      this.data.permisRoles.push(p)
    }


    /********* Connaissance **********/
    if(this.baseAdd){
      let p = new Permission ;
      p.permission = "ADD" ;
      p.role ="BASE_CONNAISSANCE" ;
      this.data.permisRoles.push(p)
    }

    if(this.baseUp){
      let p = new Permission ;
      p.permission = "WRITE" ;
      p.role ="BASE_CONNAISSANCE" ;
      this.data.permisRoles.push(p)
    }

    if(this.baseDel){
      let p = new Permission ;
      p.permission = "DELETE" ;
      p.role ="BASE_CONNAISSANCE" ;
      this.data.permisRoles.push(p)
    }

    if(this.baseCom){
      let p = new Permission ;
      p.permission = "READ" ;
      p.role ="BASE_CONNAISSANCE" ;
      this.data.permisRoles.push(p)
    }

    this.profilprovider.putProfil(this.data).subscribe(
      res =>{
        let toast = this.toastCtrl.create({message: 'Profil modifié avec succès',
          duration: 3000,
          position: 'bottom',
          cssClass : "succes" }) ;
        toast.present() ;
        loading.dismiss() ;
        form.reset();
       this.viewCtrl.dismiss({ModProfil: res});
      },
      (err) =>{
        let toast = this.toastCtrl.create({message: 'Erreur lors de modification',
          duration: 3000,
          position: 'bottom',
          cssClass : "fail" }) ;
        toast.present() ;
        loading.dismiss() ;
      }
    );
  }

  dismiss() {
    this.viewCtrl.dismiss({ModProfil : this.InitProfil});
  }
}

