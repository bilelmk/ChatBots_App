import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/accueil', title: 'Accueil',  icon: 'home', class: '' },
    { path: '/utilisateurs', title: 'Utilisateurs',  icon:'person', class: '' },
    { path: '/profils', title: 'Profils',  icon:'verified_user', class: '' },
    { path: '/groupe', title: 'Groupes',  icon:'supervisor_account', class: '' },
    { path: '/chatbot', title: 'ChatBots',  icon:'adb', class: '' },
    { path: '/base', title: 'Base De Connaissance',  icon:'message', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
