import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-out-button',
  templateUrl: './log-out-button.component.html',
  styleUrls: ['./log-out-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogOutButtonComponent {
  constructor(private authService: AuthService) {}

  logOut(): void {
    this.authService.logOut();
  }
}
