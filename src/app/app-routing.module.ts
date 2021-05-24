import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoggedInGuard } from './logged-in.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';

type NamedRoutes = Array<Route & { name: string }>;

export const routes: NamedRoutes = [
  { path: 'login', component: LoginPageComponent, name: 'Log In' },
  { path: '', component: HomePageComponent, canActivate: [LoggedInGuard], name: 'Home' },
  { path: 'reset-password', component: ResetPasswordPageComponent, name: 'Reset Password' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoggedInGuard],
})
export class AppRoutingModule {}
