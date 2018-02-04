import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
        //subscribe will consume the req.
        //do won't consume, by add a middle state
        return next.handle(req).do(
            event => {
                console.log('logging interceptor', event);
            }
        )
    }
}