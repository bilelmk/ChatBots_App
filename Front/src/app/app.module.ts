import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ConnectionService }from './services/connection.service';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SigninComponent } from './signin/signin.component';
import {
  MatSlideToggleModule, MatButtonModule, MatInputModule, MatRippleModule, MatFormFieldModule, MatTooltipModule,
  MatSelectModule, MatListModule, MatRadioModule, MatCheckboxModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { ProfessorProfileComponent } from './professor-profile/professor-profile.component';
import {AjouterutilisateurComponent} from './utilisateurs/ajouterutilisateur/ajouterutilisateur.component';
import {SupprimerutilisateurComponent} from './utilisateurs/supprimerutilisateur/supprimerutilisateur.component';
import {ModifierutilisateurComponent} from './utilisateurs/modifierutilisateur/modifierutilisateur.component';
import {AjoutergroupeComponent} from './groupe/ajoutergroupe/ajoutergroupe.component';
import {ModifiergroupeComponent} from './groupe/modifiergroupe/modifiergroupe.component';
import {SupprimergroupeComponent} from './groupe/supprimergroupe/supprimergroupe.component';
import {UtilisateurgroupeComponent} from './groupe/utilisateurgroupe/utilisateurgroupe.component';
import {ModifierprofilComponent} from './profils/modifierprofil/modifierprofil.component';
import {AjouterprofilComponent} from './profils/ajouterprofil/ajouterprofil.component';
import {SupprimerprofilComponent} from './profils/supprimerprofil/supprimerprofil.component';
import {AjouterchatbotComponent} from './chatbot/ajouterchatbot/ajouterchatbot.component';
import {ModifierchatbotComponent} from './chatbot/modifierchatbot/modifierchatbot.component';
import {SupprimerchatbotComponent} from './chatbot/supprimerchatbot/supprimerchatbot.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
    MatDialogModule,
    MatListModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatCheckboxModule,



  ],
  entryComponents: [
    AjouterutilisateurComponent,
    SupprimerutilisateurComponent,
    ModifierutilisateurComponent,
    AjoutergroupeComponent,
    ModifiergroupeComponent,
    SupprimergroupeComponent,
    UtilisateurgroupeComponent,
    ModifierprofilComponent,
    AjouterprofilComponent,
    SupprimerprofilComponent,
    AjouterchatbotComponent,
    ModifierchatbotComponent,
    SupprimerchatbotComponent
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SigninComponent,
    ProfessorProfileComponent,
    AjouterutilisateurComponent,
    SupprimerutilisateurComponent,
    ModifierutilisateurComponent,
    AjoutergroupeComponent,
    ModifiergroupeComponent,
    SupprimergroupeComponent,
    UtilisateurgroupeComponent,
    ModifierprofilComponent,
    AjouterprofilComponent,
    SupprimerprofilComponent,
    AjouterchatbotComponent,
    ModifierchatbotComponent,
    SupprimerchatbotComponent


  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
