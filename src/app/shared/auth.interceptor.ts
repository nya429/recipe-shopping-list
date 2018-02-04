import { AuthService } from './../auth/auth.service';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('DEBUG_INTERCEPTOR', req);
        const reqClone = req.clone({params: req.params.set('auth', this.authService.getToken())})
        return next.handle(req);
    }
}
