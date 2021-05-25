import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-password-page',
  templateUrl: './set-password-page.component.html',
  styleUrls: ['./set-password-page.component.scss'],
})
export class SetPasswordPageComponent implements OnInit {
  passwordForm = new FormGroup({
    password: new FormControl('', Validators.required),
    repeated: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    const matchValidator = (control: AbstractControl): ValidationErrors | null => {
      const passwordControl = control.get('password') as FormControl;
      const repeatedControl = control.get('repeated') as FormControl;
      const match = passwordControl.value === repeatedControl.value;
      console.log(control);
      return match ? null : { passwordMismatch: true };
    };
    this.passwordForm.setValidators(matchValidator);
  }

  shouldDisplayPasswordMismatchMessage(formGroup: AbstractControl): boolean {
    const passwordControlTouched = formGroup.get('password')?.touched;
    const repeatedControlTouched = formGroup.get('repeated')?.touched;
    return formGroup.errors?.passwordMismatch && passwordControlTouched && repeatedControlTouched;
  }

  shouldDisplayRequiredMessage(formControl: AbstractControl): boolean {
    return formControl.touched && formControl.errors?.required;
  }

  submit(): void {
    this.router.navigate(['/', 'login']);
  }
}
