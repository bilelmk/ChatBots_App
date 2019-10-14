import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    prev : string ;
}
export const ROUTES: RouteInfo[] = [
    { path: '/accueil', title: 'Accueil',  icon: 'home', class: '' , prev : '' },

    { path: '/utilisateurs', title: 'Utilisateurs',  icon:'person', class: ''  , prev : 'admin' },
    { path: '/profils', title: 'Profils',  icon:'verified_user', class: ''  , prev : 'admin' },
    { path: '/groupe', title: 'Groupes',  icon:'supervisor_account', class: ''   , prev : 'admin'},

    { path: '/chatbot', title: 'ChatBots',  icon:'adb', class: ''  , prev : 'grp' },
    { path: '/base', title: 'Base De Connaissance',  icon:'message', class: ''  , prev : 'grp'  },

    { path: '/notifications', title: 'Notifications',  icon:'notification_important', class: ''  , prev : 'admin'  },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  admin : string = null;
  grp : string = null ;


  constructor() { }

  ngOnInit() {
      if(sessionStorage.getItem('admin') == 'true'){
          this.admin = 'admin'
      }
      if(sessionStorage.getItem('admin') == 'true' || sessionStorage.getItem('grp')== 'true'){
          this.grp = 'grp'
      }

      this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
