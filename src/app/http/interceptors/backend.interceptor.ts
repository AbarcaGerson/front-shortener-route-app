import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/helpers/localstorage.service';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {

  private subsidiaryId: string = '';
  private authorization: any = '';

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      if (this.localStorageService.getItem('subsidiary_id')) {
        this.subsidiaryId = this.localStorageService.getItem('subsidiary_id');
      }

      const headers = {
        Authorization: `Bearer ${this.authorization}`,
        'subsidiary_id': `${this.subsidiaryId}`,
        'GMT': Intl.DateTimeFormat().resolvedOptions().timeZone
      };

      request = request.clone({
        setHeaders: headers
      });

      if (request.url.startsWith('api/')) {
        const backendRequest = request.clone({
          url: `${environment.backend_url}/${request.url}`
        });
        return next.handle(backendRequest);
      }
      return next.handle(request);

  }

}
