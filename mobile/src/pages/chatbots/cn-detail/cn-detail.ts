import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {GroupeProvider} from "../../../providers/groupe/groupe";
import {ChatbotProvider} from "../../../providers/chatbot/chatbot";
import {Connaissance} from "../../../classes/connaissance";

/**
 * Generated class for the CnDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cn-detail',
  templateUrl: 'cn-detail.html',
})
export class CnDetailPage implements OnInit{

  cns : Connaissance[] =null ;
  constructor(public navCtrl: NavController ,private loadingCtrl :LoadingController ,
              private viewCtrl : ViewController , private navParams : NavParams) {
  }



  ngOnInit() {
    const loading = this.loadingCtrl.create({
      content:" Loading . . . . "
    });
    loading.present() ;

    this.cns = this.navParams.get('bot').knowledgeBases ;

    loading.dismiss() ;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
