import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoggedInGuard } from './logged-in.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { SidebarIcon } from './sidebar-nav/sidebar-nav.component';

type NamedRoutes = Array<Route & { name: string; icon: SidebarIcon }>;

export const routes: NamedRoutes = [
  { path: '', component: HomePageComponent, canActivate: [LoggedInGuard], name: 'Home', icon: SidebarIcon.home },
  { path: 'login', component: LoginPageComponent, name: 'Log In', icon: SidebarIcon.logIn },
  { path: 'reset-password', component: ResetPasswordPageComponent, name: 'Reset Password', icon: SidebarIcon.reset },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoggedInGuard],
})
export class AppRoutingModule {}
