import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public readonly loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) {}

  logIn(): void {
    const { username, password } = this.loginForm.value;
    this.authService.logIn(username, password);
    this.router.navigate(['/']);
  }

  shouldDisplayRequiredMessage(formControl: AbstractControl): boolean {
    return formControl.touched && formControl.invalid;
  }
}
