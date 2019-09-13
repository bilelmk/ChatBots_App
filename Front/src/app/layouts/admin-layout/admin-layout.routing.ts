import { Routes } from '@angular/router';

import { AccueilComponent } from '../../accueil/accueil.component';
import { UtilisateursComponent } from '../../utilisateurs/utilisateurs.component';
import { ProfilsComponent } from '../../profils/profils.component';
import { GroupeComponent } from '../../groupe/groupe.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'accueil',        component: AccueilComponent },
    { path: 'utilisateurs',   component: UtilisateursComponent },
    { path: 'profils',        component: ProfilsComponent },
    { path: 'groupe',         component: GroupeComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
