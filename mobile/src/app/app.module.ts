import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { UtilisateurPage } from "../pages/Utilisateurs/utilisateur";
import { ProfilPage } from "../pages/Profils/profil";
import { BasePage } from "../pages/base/base";
import { GroupesPage } from "../pages/groupes/groupes";
import { ChatbotsPage } from "../pages/chatbots/chatbots";
import { UtilisateurProvider } from '../providers/utilisateur/utilisateur';
import { GroupeProvider } from '../providers/groupe/groupe';
import { BaseProvider } from '../providers/base/base';
import { ChatbotProvider } from '../providers/chatbot/chatbot';
import { ProfilProvider } from '../providers/profil/profil';
import { ModifierUtilisateurPage} from "../pages/Utilisateurs/modifier-utilisateur/modifier-utilisateur";
import { AjouterUtilisateurPage} from "../pages/Utilisateurs/ajouter-utilisateur/ajouter-utilisateur";
import { AjouterGroupePage} from "../pages/groupes/ajouter-groupe/ajouter-groupe";
import {ModifierGroupePage} from "../pages/groupes/modifier-groupe/modifier-groupe";
import {AjouterProfilPage} from "../pages/Profils/ajouter-profil/ajouter-profil";
import {ModifierProfilPage} from "../pages/Profils/modifier-profil/modifier-profil";
import {DetailProfilPage} from "../pages/Profils/detail-profil/detail-profil";
import {AjouterCnPage} from "../pages/base/ajouter-cn/ajouter-cn";
import {ModifierCnPage} from "../pages/base/modifier-cn/modifier-cn";
import {ModifierBotPage} from "../pages/chatbots/modifier-bot/modifier-bot";
import {AjouterBotPage} from "../pages/chatbots/ajouter-bot/ajouter-bot";
import {CnDetailPage} from "../pages/chatbots/cn-detail/cn-detail";
import {BotCnPage} from "../pages/chatbots/bot-cn/bot-cn";
import {UserGroupePage} from "../pages/groupes/user-groupe/user-groupe";
import {CommunicationPage} from "../pages/communication/communication";
import {MonComptePage} from "../pages/mon-compte/mon-compte";
import { PermissionProvider } from '../providers/permission/permission';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    UtilisateurPage,
    ProfilPage,
    BasePage,
    GroupesPage,
    ChatbotsPage,
    ModifierUtilisateurPage,
    AjouterUtilisateurPage,
    AjouterGroupePage,
    ModifierGroupePage,
    AjouterProfilPage,
    ModifierProfilPage,
    DetailProfilPage,
    AjouterCnPage,
    ModifierCnPage,
    ModifierBotPage,
    AjouterBotPage,
    CnDetailPage,
    BotCnPage,
    UserGroupePage,
    CommunicationPage,
    MonComptePage

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    UtilisateurPage,
    ProfilPage,
    BasePage,
    GroupesPage,
    ChatbotsPage,
    ModifierUtilisateurPage,
    AjouterUtilisateurPage,
    AjouterGroupePage,
    ModifierGroupePage,
    AjouterProfilPage,
    ModifierProfilPage,
    DetailProfilPage,
    AjouterCnPage,
    ModifierCnPage,
    ModifierBotPage,
    AjouterBotPage,
    CnDetailPage,
    BotCnPage,
    UserGroupePage,
    CommunicationPage,
    MonComptePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UtilisateurProvider,
    GroupeProvider,
    BaseProvider,
    ChatbotProvider,
    ProfilProvider,
    PermissionProvider,

  ]
})
export class AppModule {}
