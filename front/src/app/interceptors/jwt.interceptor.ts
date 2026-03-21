import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth";
import { Injectable } from "@angular/core";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token: string|null = this.authService.getToken();

      if (token !== null){
        const cloneReq = req.clone({
            setHeaders: {
                Authorization: 'Bearer '+token
            }
        });
        return next.handle(cloneReq);
      }

      return next.handle(req);
  }
  
}