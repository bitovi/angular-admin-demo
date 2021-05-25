import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { InternalDataPageComponent } from './internal-data-page/internal-data-page.component';
import { LoggedInGuard } from './logged-in.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [LoggedInGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'reset-password', component: ResetPasswordPageComponent },
  { path: 'internal-data', component: InternalDataPageComponent, canActivate: [LoggedInGuard] },
  { path: 'settings', component: SettingsPageComponent, canActivate: [LoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoggedInGuard],
})
export class AppRoutingModule {}
