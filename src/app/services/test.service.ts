import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private http: HttpClient
  ) { }

  public store(id: any): Observable<any> {
    return this.http.post<any>('api/test', { id })
      .pipe(
        map((response: any) => response.data)
      );
  }

}
