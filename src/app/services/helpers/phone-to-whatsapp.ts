import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneToWhatsappHelper {

  constructor() { }

  public phoneToWhatsapp(phone_number: any) {
    const phone = phone_number.replace('+', "").replace(/ /g, "");
    return phone;
  }
}
