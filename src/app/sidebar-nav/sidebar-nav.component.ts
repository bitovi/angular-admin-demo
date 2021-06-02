import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

/* eslint-disable no-unused-vars */
export enum SidebarIcon {
  home = 'pi-home',
  logIn = 'pi-sign-in',
  reset = 'pi-user',
  list = 'pi-list',
  settings = 'pi-cog',
  star = 'pi-star',
}
/* eslint-enable no-unused-vars */

type RouteUIData = {
  name: string;
  icon: SidebarIcon;
  path: string;
  showWhileLoggedIn: boolean;
  showWhileLoggedOut: boolean;
};

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss'],
})
export class SidebarNavComponent {
  visibleRoutes: Observable<Array<RouteUIData>>;

  private readonly allRoutes: Array<RouteUIData> = [
    {
      name: 'Home',
      icon: SidebarIcon.home,
      path: '',
      showWhileLoggedIn: true,
      showWhileLoggedOut: false,
    },
    {
      name: 'Log In',
      icon: SidebarIcon.logIn,
      path: '/login',
      showWhileLoggedIn: false,
      showWhileLoggedOut: true,
    },
    {
      name: 'UI Demo',
      icon: SidebarIcon.star,
      path: '/ui-demo',
      showWhileLoggedIn: true,
      showWhileLoggedOut: false,
    },
    {
      name: 'Reset Password',
      icon: SidebarIcon.reset,
      path: '/reset-password',
      showWhileLoggedIn: true,
      showWhileLoggedOut: true,
    },
    {
      name: 'Internal Data',
      icon: SidebarIcon.list,
      path: '/internal-data',
      showWhileLoggedIn: true,
      showWhileLoggedOut: false,
    },
    {
      name: 'Settings',
      icon: SidebarIcon.settings,
      path: '/settings',
      showWhileLoggedIn: true,
      showWhileLoggedOut: false,
    },
  ];

  constructor(private authService: AuthService) {
    this.visibleRoutes = authService.loggedIn.pipe(
      map((loggedIn) => {
        if (loggedIn) {
          return this.allRoutes.filter((route) => route.showWhileLoggedIn);
        } else {
          return this.allRoutes.filter((route) => route.showWhileLoggedOut);
        }
      })
    );
  }
}
