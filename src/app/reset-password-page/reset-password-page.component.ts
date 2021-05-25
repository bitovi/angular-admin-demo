import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.scss'],
})
export class ResetPasswordPageComponent {
  resetForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.resetForm = new FormGroup({
      username: new FormControl('', Validators.required),
    });

    authService.username
      .pipe(
        filter((username) => Boolean(username)),
        take(1)
      )
      .subscribe((username) => {
        this.resetForm.get('username')?.patchValue(username);
      });
  }

  submit(): void {
    this.router.navigate(['/', 'set-password'], { queryParams: { username: this.resetForm.value.username } });
  }

  shouldDisplayRequiredMessage(formControl: AbstractControl): boolean {
    return formControl.touched && formControl.errors?.required;
  }
}
