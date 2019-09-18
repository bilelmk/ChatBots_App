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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    UtilisateurPage,
    ProfilPage,
    BasePage,
    GroupesPage,
    ChatbotsPage

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
    ChatbotsPage

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

  ]
})
export class AppModule {}
