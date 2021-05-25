import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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
}
