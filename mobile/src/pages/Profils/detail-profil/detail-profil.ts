import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Profil} from "../../../classes/profil";

/**
 * Generated class for the DetailProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-profil',
  templateUrl: 'detail-profil.html',
})
export class DetailProfilPage implements OnInit{

  data : Profil ;
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
              private loadingCtrl : LoadingController )  {}


  ngOnInit(): void {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.data = this.navParams.get('profil')
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

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
