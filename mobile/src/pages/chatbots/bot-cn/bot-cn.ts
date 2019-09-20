import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {BaseProvider} from "../../../providers/base/base";
import {Chatbot} from "../../../classes/chatbot";

/**
 * Generated class for the BotCnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bot-cn',
  templateUrl: 'bot-cn.html',
})
export class BotCnPage {

  cnToAdd : number = null ;
  cns = [] ;
  data : Chatbot ;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private loadingCtrl :LoadingController  ,
              private cnservice : BaseProvider , private toastCtrl: ToastController , private viewCtrl : ViewController) {
  }

  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.data = this.navParams.get('bot') ;

    this.cnservice.getConnaissances().subscribe(
      (res) => {
        for (let cn of res){
          if(!(this.data.knowledgeBases.find(
            us => {
              return us.id == cn.id
            }
          ))){
            this.cns.push(cn)
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
    loading.dismiss() ;
  }


  supprimer(connaissance , bot){

    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;


    let cn = this.data.knowledgeBases.find(
      (res) => {
        return res.id == connaissance ;
      }
    );
    this.cnservice.DeleteCnFromBot(connaissance,bot).subscribe(
      (res) => {
        this.cns.push(cn)
        this.data.knowledgeBases.splice(
          this.data.knowledgeBases.findIndex(
            (res) => {
              return res.id == connaissance ;
            }
          ),1
        )
        loading.dismiss()
        let toast = this.toastCtrl.create({message: 'Connaissance supprimer avec succès',
          duration: 3000,
          position: 'bottom',
          cssClass : "succes" }) ;
        toast.present() ;
      },
      (err) => {
        loading.dismiss();
        let toast = this.toastCtrl.create({message: 'Erreur lors de suppression',
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


    let cn = this.cns.find(
      (res) => {
        return res.id == this.cnToAdd ;
      }
    );
    this.cnservice.AddCnToBot(this.cnToAdd, this.data.id).subscribe(
      (res) => {
        this.data.knowledgeBases.push(cn);
        this.cns = [] ;
        this.cnservice.getConnaissances().subscribe(
          (res) => {
            for (let cn of res){
              if(!(this.data.knowledgeBases.find(
                us => {
                  return us.id == cn.id
                }
              ))){
                this.cns.push(cn)
              }}
            this.cnToAdd  = null ;
            loading.dismiss()
            let toast = this.toastCtrl.create({message: 'Connaissance ajouté avec succès',
              duration: 3000,
              position: 'bottom',
              cssClass : "succes" }) ;
            toast.present() ;
            },

        )
      },
      (err) => {
        loading.dismiss();
        let toast = this.toastCtrl.create({message: 'Erreur lors de l\'ajout',
          duration: 3000,
          position: 'bottom',
          cssClass : "fail" }) ;
        toast.present() ;
      })
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }
}
