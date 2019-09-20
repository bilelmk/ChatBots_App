import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, ToastController, ViewController} from 'ionic-angular';
import {Permission} from "../../../classes/permission";
import {Profil} from "../../../classes/profil";
import {NgForm} from "@angular/forms";
import {ProfilProvider} from "../../../providers/profil/profil";

/**
 * Generated class for the AjouterProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-profil',
  templateUrl: 'ajouter-profil.html',
})
export class AjouterProfilPage implements  OnInit{

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

  profil = new Profil ;

  constructor(public navCtrl: NavController ,private profilprovider : ProfilProvider , private viewCtrl :ViewController ,
  private loadingCtrl : LoadingController , private toastCtrl: ToastController)  {}

  ngOnInit(): void {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    loading.dismiss()

  }

  ajouter(form : NgForm){
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.profil.name = form.value.nom ;
    this.profil.description = form.value.description ;
    this.profil.isActive = form.value.active == "" ;

    /******* User ********/


    if(this.userAdd){
      let p = new Permission  ;
      p.permission = "ADD" ;
      p.role ="USER" ;
      this.profil.permisRoles.push(p)
    }

    if(this.userUp){
      let p = new Permission ;
      p.permission = "WRITE" ;
      p.role = "USER" ;
      this.profil.permisRoles.push(p)
    }

    if(this.userDel){
      let p = new Permission ;
      p.permission = "DELETE" ;
      p.role = "USER" ;
      this.profil.permisRoles.push(p)
    }

    if(this.userCom){
      let p = new Permission ;
      p.permission = "READ" ;
      p.role = "USER" ;
      this.profil.permisRoles.push(p)
    }


    /******* Profil ********/

    if(this.profilAdd){
      let p = new Permission ;
      p.permission = "ADD" ;
      p.role = "PROFIL" ;
      this.profil.permisRoles.push(p)
    }

    if(this.profilUp){
      let p = new Permission ;
      p.permission = "WRITE" ;
      p.role = "PROFIL" ;
      this.profil.permisRoles.push(p)
    }

    if(this.profilDel){
      let p = new Permission ;
      p.permission = "DELETE" ;
      p.role = "PROFIL" ;
      this.profil.permisRoles.push(p)
    }

    if(this.profilCom){
      let p = new Permission ;
      p.permission = "READ" ;
      p.role = "PROFIL" ;
      this.profil.permisRoles.push(p)
    }


    /********* Groupe **********/
    if(this.grpAdd){
      let p = new Permission ;
      p.permission = "ADD" ;
      p.role = "GROUP" ;
      this.profil.permisRoles.push(p)
    }

    if(this.grpUp){
      let p = new Permission ;
      p.permission = "WRITE" ;
      p.role = "GROUP" ;
      this.profil.permisRoles.push(p)
    }

    if(this.grpDel){
      let p = new Permission ;
      p.permission = "DELETE" ;
      p.role = "GROUP" ;
      this.profil.permisRoles.push(p)
    }

    if(this.grpCom){
      let p = new Permission ;
      p.permission = "READ" ;
      p.role = "GROUP" ;
      this.profil.permisRoles.push(p)
    }



    /********* Bot **********/
    if(this.botAdd){
      let p = new Permission ;
      p.permission = "ADD" ;
      p.role = "CHATBOT" ;
      this.profil.permisRoles.push(p)
    }

    if(this.botUp){
      let p = new Permission ;
      p.permission = "WRITE" ;
      p.role = "CHATBOT" ;
      this.profil.permisRoles.push(p)
    }

    if(this.botDel){
      let p = new Permission ;
      p.permission = "DELETE" ;
      p.role = "CHATBOT" ;
      this.profil.permisRoles.push(p)
    }

    if(this.botCom){
      let p = new Permission ;
      p.permission = "READ" ;
      p.role = "CHATBOT" ;
      this.profil.permisRoles.push(p)
    }


    /********* Connaissance **********/
    if(this.baseAdd){
      let p = new Permission ;
      p.permission = "ADD" ;
      p.role ="BASE_CONNAISSANCE" ;
      this.profil.permisRoles.push(p)
    }

    if(this.baseUp){
      let p = new Permission ;
      p.permission = "WRITE" ;
      p.role ="BASE_CONNAISSANCE" ;
      this.profil.permisRoles.push(p)
    }

    if(this.baseDel){
      let p = new Permission ;
      p.permission = "DELETE" ;
      p.role ="BASE_CONNAISSANCE" ;
      this.profil.permisRoles.push(p)
    }

    if(this.baseCom){
      let p = new Permission ;
      p.permission = "READ" ;
      p.role ="BASE_CONNAISSANCE" ;
      this.profil.permisRoles.push(p)
    }

    console.log(this.profil)
    this.profilprovider.postProfil(this.profil).subscribe(
      res =>{
        let toast = this.toastCtrl.create({message: 'Profil ajouté avec succès',
          duration: 3000,
          position: 'bottom',
          cssClass : "succes" }) ;
        toast.present() ;
        loading.dismiss() ;
        form.reset();
        this.viewCtrl.dismiss({AddedProfil: res});
      },
      (err) =>{
        let toast = this.toastCtrl.create({message: 'Erreur lors de l\'ajout',
          duration: 3000,
          position: 'bottom',
          cssClass : "fail" }) ;
        toast.present() ;
        loading.dismiss() ;
        this.profil = new Profil() ;
      }
    );
  }

  dismiss() {
    this.viewCtrl.dismiss({AddedProfil: this.profil});
  }

}
