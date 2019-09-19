import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {GroupeProvider} from "../../../providers/groupe/groupe";
import {ProfilProvider} from "../../../providers/profil/profil";
import {Groupe} from "../../../classes/groupe";
import {Profil} from "../../../classes/profil";
import {Utilisateur} from "../../../classes/utilisateur";
import {UtilisateurProvider} from "../../../providers/utilisateur/utilisateur";

/**
 * Generated class for the AjouterUtilisateurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-utilisateur',
  templateUrl: 'ajouter-utilisateur.html',
})
export class AjouterUtilisateurPage implements OnInit{

  groupes : Groupe[] = null ;
  profils : Profil[] = null ;
  utilisateur = new Utilisateur ;
  constructor(public navCtrl: NavController, public navParams: NavParams ,private loadingCtrl :LoadingController ,
              private grpprovider : GroupeProvider , private profilprovider : ProfilProvider ,
              private userprovider : UtilisateurProvider , private viewCtrl : ViewController) {
  }

  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;
    this.grpprovider.getGroupes().subscribe(
      (res) => {
        this.groupes = res ;
      }
    );
    this.profilprovider.getProfils().subscribe(
      (res) => {
        this.profils = res ;
      }
    );


    loading.dismiss() ;
  }


  Add(form){
    this.utilisateur.username = form.value.username ;
    this.utilisateur.firstName = form.value.nom ;
    this.utilisateur.lastName =form.value.prenom ;
    this.utilisateur.email =form.value.mail ;
    this.utilisateur.matricule =form.value.matricule ;
    this.utilisateur.password = form.value.pass;
    this.utilisateur.isActive = form.value.active === "" ;
    this.utilisateur.isAdminGroup  = form.value.grpadmin  === ""  ;
    this.utilisateur.isSuperUser=form.value.admin  ===  ""  ;
    this.utilisateur.profil = form.value.profil ;
    let grp = new Groupe ;
    grp.id = form.value.groupe.id ;
    this.utilisateur.groupes.push(grp);
    this.userprovider.postUser(this.utilisateur).subscribe(
      (res) => {
        console.log(res)
      },(err) => {
        console.log(err)
      }
    ) ;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
