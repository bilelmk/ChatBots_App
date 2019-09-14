import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { AccueilComponent } from '../../accueil/accueil.component';
import { UtilisateursComponent } from '../../utilisateurs/utilisateurs.component';
import { ProfilsComponent } from '../../profils/profils.component';
import { GroupeComponent } from '../../groupe/groupe.component';
import { ChatbotComponent } from '../../chatbot/chatbot.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatIconModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatNativeDateModule,
  MatCardModule,
  MatPaginatorModule,
  MatTableModule,
  MatRadioModule,
  MatSortModule

} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes ),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
  ],
  declarations: [
    AccueilComponent,
    UtilisateursComponent,
    ProfilsComponent,
    GroupeComponent,
    ChatbotComponent,
    NotificationsComponent,
    UpgradeComponent,

  ]
})

export class AdminLayoutModule {}
