import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

  private _authData = new BehaviorSubject<AuthData | undefined>(undefined);

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
