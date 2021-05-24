import { Component } from '@angular/core';
import { routes } from '../app-routing.module';

/* eslint-disable no-unused-vars */
export enum SidebarIcon {
  home = 'pi-home',
  logIn = 'pi-sign-in',
  reset = 'pi-user',
}
/* eslint-enable no-unused-vars */

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss'],
})
export class SidebarNavComponent {
  routes = routes;
}
