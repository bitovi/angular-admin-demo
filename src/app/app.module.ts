import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';

import { AuthService } from './auth.service';
import { CountryService } from './countryservice';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { InternalDataPageComponent } from './internal-data-page/internal-data-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { LogOutButtonComponent } from './log-out-button/log-out-button.component';
import { SetPasswordPageComponent } from './set-password-page/set-password-page.component';
import { AppBreadcrumbService } from './app.breadcrumb.service';
import { InputDemoComponent } from './input-demo-page/inputdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    InputDemoComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SidebarNavComponent,
    InternalDataPageComponent,
    SettingsPageComponent,
    LogOutButtonComponent,
    SetPasswordPageComponent,
  ],
  imports: [
    AppRoutingModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    ChipsModule,
    DropdownModule,
    FormsModule,
    InputNumberModule,
    InputTextModule,
    KnobModule,
    ListboxModule,
    MultiSelectModule,
    RatingModule,
    ReactiveFormsModule,
    SelectButtonModule,
  ],
  providers: [AppBreadcrumbService, AuthService, CountryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
