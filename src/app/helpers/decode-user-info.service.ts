import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { LocalStorageService} from 'angular-web-storage';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DecodeUserInfoService {

  constructor(
    public local: LocalStorageService) { }

  // public getParam(key: string) {

  //   const id_token = this.local.get(environment.cryptoIdToken);
  //   const value = jwt_decode(id_token);

  //   return value[key];

  // }
}
