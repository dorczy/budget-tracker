import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;

    if (
      !this.authService.currentUserValue ||
      this.authService.currentUserValue.role < expectedRole
    ) {
      this.router.navigate(['forbidden']);
      return false;
    }
    return true;

  }
}
