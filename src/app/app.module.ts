import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { AuthService } from './auth.service';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { InternalDataPageComponent } from './internal-data-page/internal-data-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { LogOutButtonComponent } from './log-out-button/log-out-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SidebarNavComponent,
    InternalDataPageComponent,
    SettingsPageComponent,
    LogOutButtonComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
