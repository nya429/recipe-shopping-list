import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGard implements CanActivate {
    constructor(private router: Router,
                private authService: AuthService) {}
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
                    if (this.authService.isAuthenticated()) {
                        return true;
                    } else {
                        this.router.navigate(['/signin']);
                        return false;
                    }
                }
}
