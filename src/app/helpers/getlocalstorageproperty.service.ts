import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LocalStorageService} from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class GetLocalStoragePropertyService {

  clinic_id: any;
  subsidiary_id: any;
  subsidiary_name: any;
  bucket_name: any;
  user_id: any;
  country_id: any;
  user_permissions: any;
  user_rol: any;
  users_by_subsidiaries: any;

  jsonClinic: any;
  clinic: any = ''; // Value from local storage for clinic model

  jsonSubsidiary: any;
  subsidiary: any = ''; // Value from local storage for subsidiary model

  constructor(
    private local: LocalStorageService) 
  {
  }

  /**
   * Get Clinic property
   * @param key any
   */
  public getClinic(key: any) {
    // this.jsonClinic = JSON.parse(localStorage.getItem('clinic'));
    // if (this.jsonClinic !== null) {
    //   this.clinic = this.jsonClinic._value;
    //   return this.clinic[key];
    // }
    return null;
  }

  /**
   * Get Subsidiary property
   * @param key any
   */
  public getSubsidiary(key: any) {
    // this.jsonSubsidiary = JSON.parse(localStorage.getItem('subsidiary'));
    // if (this.jsonSubsidiary !== null) {
    //   this.subsidiary = this.jsonSubsidiary._value;
    //   return this.subsidiary[key];
    // }
    return null;
  }

  public getSubsidiaryUsers(isActive = true, isDelete = false, showInMedicList = false, showInEventsList = false) {
    let subsidiaryUsers = this.local.get('subsidiary_users');

    if (subsidiaryUsers) {

      if(!isDelete) {
        subsidiaryUsers = subsidiaryUsers.filter((e: any) => e.deleted_at === null);
      }

      if(isActive) {
        subsidiaryUsers = subsidiaryUsers.filter((e: any) => e.is_active);
      }

      if(showInMedicList) {
        subsidiaryUsers = subsidiaryUsers.filter((e: any) => e.role.show_in_medic_list == true);
      }

      if(showInEventsList) {
        subsidiaryUsers = subsidiaryUsers.filter((e: any) => e.role?.show_in_events_list??true);
      }

      return subsidiaryUsers;
    }
    
    return null;
  }

  /**
   * Get User Subsidiary
   * @param key any
   */
  public getSubsidiaryUser(key: any) {
    // const jsonUserSubsidiary = JSON.parse(localStorage.getItem('subsidiary_user'));
    // if (jsonUserSubsidiary !== null) {
    //   const userSubsidiary = jsonUserSubsidiary._value;
    //   return userSubsidiary[key];
    // }
    return null;
  }

  /**
   * Role Permissions 
   **/
  public rolePermissions() {
    if (this.local.get('role_permissions')) {
      return this.local.get('role_permissions');
    }
    return null;
  }

   /**
   * Get Subscription 
   **/
   public getSubscription() {
    if (this.local.get('subscription')) {
      return this.local.get('subscription');
    }
    return null;
  }

  /**
   * Subsidiary configs 
  **/
  public getSubsidiaryConfigs() {
    if (this.local.get('subsidiary_configs')) {
      return this.local.get('subsidiary_configs');
    }
    return null;
  }

}
