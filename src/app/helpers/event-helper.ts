import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EventHelper {

  public getTypeEventsArray() {
    const eventSubtypesLocalStorage = localStorage.getItem('eventSubtypes');
    return eventSubtypesLocalStorage ? JSON.parse(eventSubtypesLocalStorage) : [];
  }
      
}
