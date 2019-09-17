import { Routes } from '@angular/router';

import { AccueilComponent } from '../../accueil/accueil.component';
import { UtilisateursComponent } from '../../utilisateurs/utilisateurs.component';
import { ProfilsComponent } from '../../profils/profils.component';
import { GroupeComponent } from '../../groupe/groupe.component';
import { ChatbotComponent } from '../../chatbot/chatbot.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {BaseComponent} from '../../base/base.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'accueil',        component: AccueilComponent },
    { path: 'utilisateurs',   component: UtilisateursComponent },
    { path: 'profils',        component: ProfilsComponent },
    { path: 'groupe',         component: GroupeComponent },
    { path: 'chatbot',        component: ChatbotComponent },
    { path: 'base',           component: BaseComponent },
    { path: 'notifications',  component: NotificationsComponent },
];
