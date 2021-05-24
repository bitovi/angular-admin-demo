import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { merge, Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const redirect = this.authService.loggedIn.pipe(
      filter((loggedIn) => !loggedIn),
      map(() => this.router.parseUrl('/login'))
    );
    const allow = this.authService.loggedIn.pipe(filter((loggedIn) => loggedIn));

    return merge(allow, redirect).pipe(take(1));
  }
}
