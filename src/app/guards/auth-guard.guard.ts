import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, from, map, of } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return from(this.authService.isUserLoggedIn()).pipe(
      map(loggedIn => {
        if (loggedIn) {
          return true;
        } else {
          // Redirecione para a página de login ou qualquer outra página não autenticada
          return this.router.createUrlTree(['/login']);
        }
      }),
      catchError(() => of(false))
    );
  }
}
