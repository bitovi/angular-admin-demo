import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-set-password-page',
  templateUrl: './set-password-page.component.html',
  styleUrls: ['./set-password-page.component.scss'],
})
export class SetPasswordPageComponent implements OnInit {
  passwordForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repeated: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private route: ActivatedRoute) {
    route.queryParams
      .pipe(
        filter((params) => params.username),
        take(1)
      )
      .subscribe((username) => {
        this.passwordForm.get('username')?.patchValue(username);
      });
  }

  ngOnInit(): void {
    const matchValidatorFactory = (): ValidatorFn => {
      return (control: AbstractControl): ValidationErrors | null => {
        const passwordControl = control.get('password') as FormControl;
        const repeatedControl = control.get('repeated') as FormControl;
        const match = passwordControl.value === repeatedControl.value;
        return match ? null : { passwordMismatch: true };
      };
    };
    this.passwordForm.setValidators(matchValidatorFactory);
  }

  shouldDisplayRequiredMessage(formControl: AbstractControl): boolean {
    return formControl.touched && formControl.invalid;
  }

  submit(): void {
    const { username, password } = this.passwordForm.value;
    this.authService.logIn(username, password);
  }
}
