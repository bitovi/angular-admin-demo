import { Component } from '@angular/core';
import { routes } from '../app-routing.module';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss'],
})
export class SidebarNavComponent {
  routes = routes;
}
