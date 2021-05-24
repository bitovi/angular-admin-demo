import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

type AuthData = {
  username: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loggedIn: Observable<boolean>;

  public username: Observable<string | undefined>;

  private _authData = new ReplaySubject<AuthData | undefined>(1);

  constructor() {
    this.loggedIn = this._authData.pipe(
      map((authData) => {
        const usernameLength = authData?.username.length ?? 0;
        return usernameLength > 0;
      })
    );

    this.username = this._authData.pipe(map((authData) => authData?.username));
  }

  logIn(username: string, password: string) {
    this._authData.next({ username });
  }
}
