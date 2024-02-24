import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Injectable({
  providedIn: 'root'
})
export class BsDatePickerOptions {

  constructor(
    public datePipe: DatePipe,
  ) {
    //
  }

  /**
   * General options for DateRangePicker
   */
  configDateRangePicker() {

    /*
    |---------------------------------------------------------------------------
    | Set start of current date
    |---------------------------------------------------------------------------
    */
    let startDay = new Date();
    startDay.setHours(0, 0, 0, 0);

    /*
    |---------------------------------------------------------------------------
    | Set end of current date
    |---------------------------------------------------------------------------
    */
    let endDay = new Date();
    endDay.setHours(23, 59, 59, 999);

    /*
    |---------------------------------------------------------------------------
    | Set start seven days ago
    |---------------------------------------------------------------------------
    */
    let todayMinnusSeven = new Date(new Date().setDate(new Date().getDate() - 7));
    todayMinnusSeven.setHours(0, 0, 0, 0);

    /*
    |---------------------------------------------------------------------------
    | Set start of tomorrow
    |---------------------------------------------------------------------------
    */
    let todayPlusOne = new Date(new Date().setDate(new Date().getDate() + 1));
    todayPlusOne.setHours(0, 0, 0, 0);

    /*
    |---------------------------------------------------------------------------
    | Set the end of next seven days
    |---------------------------------------------------------------------------
    */
    let todayPlusSeven = new Date(new Date().setDate(new Date().getDate() + 7));
    todayPlusSeven.setHours(23, 59, 59, 999);

    /*
    |---------------------------------------------------------------------------
    | Set start of tomorrow
    |---------------------------------------------------------------------------
    */
    let tomorrowStart = new Date(new Date().setDate(new Date().getDate() + 1));
    tomorrowStart.setHours(0, 0, 0, 0);

    /*
    |---------------------------------------------------------------------------
    | Set end of tomorrow
    |---------------------------------------------------------------------------
    */
    let tomorrowEnd = new Date(new Date().setDate(new Date().getDate() + 1));
    tomorrowEnd.setHours(23, 59, 59, 999);

    /*
    |---------------------------------------------------------------------------
    | Set start of yesterday
    |---------------------------------------------------------------------------
    */
    let yesterdayStart = new Date(new Date().setDate(new Date().getDate() - 1));
    yesterdayStart.setHours(0, 0, 0, 0);

    /*
    |---------------------------------------------------------------------------
    | Set end of yesterday
    |---------------------------------------------------------------------------
    */
    let yesterdayEnd = new Date(new Date().setDate(new Date().getDate() - 1));
    yesterdayEnd.setHours(23, 59, 59, 999);

    /*
    |---------------------------------------------------------------------------
    | Plugin Config
    |---------------------------------------------------------------------------
    */
    const bsConfig = {
      containerClass: 'theme-blue',
      rangeInputFormat: 'DD-MM-YYYY hh:mm A',
      showWeekNumbers: false,
      adaptivePosition: true,
      customTodayClass: 'custom-today-class',
      ranges: [
        { value: [startDay, endDay], label: 'Hoy' },
        { value: [tomorrowStart, tomorrowEnd], label: 'Mañana' },
        { value: [yesterdayStart, yesterdayEnd], label: 'Ayer' },
        { value: [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)], label: 'Este mes' },
        {
          value: [
            new Date(new Date().getFullYear(), new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), 0, 23, 59, 59, 999)
          ],
          label: 'Mes anterior'
        },
        { value: [new Date(new Date().getFullYear(), 0, 1), new Date(new Date().getFullYear(), 11, 31)], label: 'Este año' },
        { value: [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear(), 0, 0, 23, 59, 59, 999)], label: 'Año anterior' },
        { value: [new Date(todayMinnusSeven), new Date()], label: 'Ultimos 7 días' },
        { value: [todayPlusOne, todayPlusSeven], label: 'Próximos 7 días' }
      ]
    };

    return bsConfig;

  }


    /**
   * General options for DateRangePicker Gestion
   */
     configDateRangePickerManagement() {
      /*
      |---------------------------------------------------------------------------
      | Set start of current date
      |---------------------------------------------------------------------------
      */
      let startDay = new Date();
      startDay.setHours(0, 0, 0, 0);
  
      /*
      |---------------------------------------------------------------------------
      | Set end of current date
      |---------------------------------------------------------------------------
      */
      let endDay = new Date();
      endDay.setHours(23, 59, 59, 999);
  
      /*
      |---------------------------------------------------------------------------
      | Set start seven days ago
      |---------------------------------------------------------------------------
      */
      let todayMinnusSeven = new Date(new Date().setDate(new Date().getDate() - 7));
      todayMinnusSeven.setHours(0, 0, 0, 0);
  
      /*
      |---------------------------------------------------------------------------
      | Set start of tomorrow
      |---------------------------------------------------------------------------
      */
      let todayPlusOne = new Date(new Date().setDate(new Date().getDate() + 1));
      todayPlusOne.setHours(0, 0, 0, 0);
  
     
     
      /*
      |---------------------------------------------------------------------------
      | Set start of yesterday
      |---------------------------------------------------------------------------
      */
      let yesterdayStart = new Date(new Date().setDate(new Date().getDate() - 1));
      yesterdayStart.setHours(0, 0, 0, 0);
  
      /*
      |---------------------------------------------------------------------------
      | Set end of yesterday
      |---------------------------------------------------------------------------
      */
      let yesterdayEnd = new Date(new Date().setDate(new Date().getDate() - 1));
      yesterdayEnd.setHours(23, 59, 59, 999);
  
      /*
      |---------------------------------------------------------------------------
      | Plugin Config
      |---------------------------------------------------------------------------
      */
      const bsConfig = {
        containerClass: 'theme-blue',
        rangeInputFormat: 'DD-MM-YYYY hh:mm A',
        showWeekNumbers: false,
        adaptivePosition: true,
        customTodayClass: 'custom-today-class',
        ranges: [
          { value: [startDay, endDay], label: 'Hoy' },
          { value: [yesterdayStart, yesterdayEnd], label: 'Ayer' },
          { value: [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)], label: 'Este mes' },
          {
            value: [
              new Date(new Date().getFullYear(), new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), 0, 23, 59, 59, 999)
            ],
            label: 'Mes anterior'
          },
          { value: [new Date(new Date().getFullYear(), 0, 1), new Date(new Date().getFullYear(), 11, 31)], label: 'Este año' },
          { value: [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear(), 0, 0, 23, 59, 59, 999)], label: 'Año anterior' },
          { value: [new Date(todayMinnusSeven), new Date()], label: 'Ultimos 7 días' }
        ]
      };
  
      return bsConfig;
  
    }

  /**
   * General options for DateRangePicker
   */
  configDateRangePickerForFutureDates() {

    /*
    |---------------------------------------------------------------------------
    | Set start of current date
    |---------------------------------------------------------------------------
    */
    let startDay = new Date(new Date().setDate((new Date().getDate() + 1)));
    startDay.setHours(0, 0, 0, 0);

    /*
    |---------------------------------------------------------------------------
    | Plugin Config
    |---------------------------------------------------------------------------
    */
    const bsConfig = {
      containerClass: 'theme-blue',
      rangeInputFormat: 'DD-MM-YYYY hh:mm A',
      showWeekNumbers: false,
      adaptivePosition: true,
      customTodayClass: 'custom-today-class',
      ranges: [
        { value: [startDay, startDay], label: 'Mañana' },
        { value: [startDay, new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)], label: 'Este mes' },
        { value: [startDay, new Date(new Date().getFullYear(), 11, 31)], label: 'Este año' },
        { value: [startDay, new Date(new Date().setDate((new Date().getDate() + 8)))], label: 'Próximos 7 días' }
      ]
    };

    return bsConfig;

  }

  /**
   * Handler generic onHidden event
   *
   * In some cases bsdatepicker plugin set start and end datetimes
   * to equals time. For example:
   * When select dates directly from calendar the input fills
   * in this way:
   * - 2020-02-01 10:00 AM - 2020-02-01 10:00 AM
   *
   * This function compare both dates and set to start at the begining
   * of day and "end" to end day.
   *
   * @param value Date[]
   * @returns Date[]
   *
   */

  onHidden(value: Date[] | any): any | Date[] {

    const dateRangePicker = value;
    const from = this.datePipe.transform(dateRangePicker[0], 'dd-MM-yyyy hh:mm aa');
    const to = this.datePipe.transform(dateRangePicker[1], 'dd-MM-yyyy hh:mm aa');

    if (from === to) {
      let start = dateRangePicker[0];
      start.setHours(0, 0, 0, 0);
      let end = dateRangePicker[1];
      end.setHours(23, 59, 59, 999);

      return [start, end];
    }

    return value;

  }


  /**
   * Generic method for manipulate urlparam with date range info
   * and transform to Date[] for daterangepicker input
   */
  createDateRangeFromUrlParamString(value: string | undefined): Date[] | string {

    if (value === "" || value === null || value === undefined) {
      return [];
    } else {
      const dateRange = JSON.parse(value);
      const from = new Date(dateRange[0]);
      const to = new Date(dateRange[1]);

      // if(from.getTime() === to.getTime()) {
      //   from.setHours(0,0,0,0);
      //   to.setHours(23,59,59,999);
      // }

      if (from.getHours() === to.getHours() && from.getMinutes() === to.getMinutes() && from.getSeconds() === to.getSeconds()) {
        from.setHours(0, 0, 0, 0);
        to.setHours(23, 59, 59, 999);
      }

      return [from, to];
    }

  }

  /**
   * 
   * @param value 
   * @returns any
   */
  emptyOrStringify(value: any): any {
    if (value !== "" && value !== undefined && value !== null) {
      return JSON.stringify(value);
    }
    return "";
  }


  /**
   * Manipulate range value for correct backend format
   */
  prepareDateRangeForBackend(value: Date[] | String | void) {
    if (value === "") {
      return "";
    }
    let start: Date;
    let end: Date;
    if (Array.isArray(value)) {
      start = value[0];
      end = value[1];
    } else {
      return "";
    }
    const startAt = this.datePipe.transform(start, 'yyyy-MM-dd HH:mm:ss Z');
    const endAt = this.datePipe.transform(end, 'yyyy-MM-dd HH:mm:ss Z');
    return startAt + ',' + endAt;
  }

  /**
   * Return array for today start and end datetimeñ
   */
  getStartEndDateTimeArrayForToday(): Date[] {
    let startDay = new Date();
    startDay.setHours(0, 0, 0, 0);
    let endDay = new Date();
    endDay.setHours(23, 59, 59, 999);
    return [startDay, endDay];
  }


  getStartAnCurrentDateTimeArrayForToday(): Date[] {
    let startDay = new Date();
    startDay.setHours(0, 0, 0, 0);
    let endDay = new Date();
    return [startDay, endDay];
  }

  /**
   * Config DatePicker for single calendar
   */
  configDatePicker(format = 'DD-MM-YYYY') {
    const bsConfig = {
      containerClass: 'theme-blue',
      dateInputFormat: format,
      showWeekNumbers: false,
      adaptivePosition: true,
    };

    return bsConfig;
  }

  /**
   * Config DatePicker for months
   */
  configMonthPicker(format = 'DD-MM-YYYY') {
    const bsConfig = {
      containerClass: 'theme-blue',
      dateInputFormat: format,
      showWeekNumbers: false,
      adaptivePosition: true,
      minMode: 'month'
    };

    return bsConfig;
  }
  /**
    * Config DatePicker for months
    */
  configPickerRange(format = 'DD-MM-YYYY') {
    const bsConfig = {
      containerClass: 'theme-blue',
      dateInputFormat: format,
      showWeekNumbers: false,
      adaptivePosition: true
    };

    return bsConfig;
  }
  /**
   * Config DateTimePicker for single calendar
   */
  configDateTimePicker() {
    const bsConfig = {
      containerClass: 'theme-blue',
      dateInputFormat: 'DD-MM-YYYY hh:mm A',
      showWeekNumbers: false,
      adaptivePosition: true,
    };

    return bsConfig;
  }

  configDateTimePickerWithTimepicker(){
    const bsConfig = {
      withTimepicker: true,
      rangeInputFormat : 'DD-MM-YYYY hh:mm A',
      dateInputFormat: 'DD-MM-YYYY hh:mm A',
      containerClass: 'theme-blue'
    };

    return bsConfig;
  }

  /**
   * Manipulate date object for correct backend format.
   */
  prepareDateTimeForBackend(value: Date): String {
    return this.datePipe.transform(value, 'yyyy-MM-dd HH:mm:ss Z')!;
  }

  /**
   * Manipulate date object for correct backend format.
   */
  prepareDateForBackend(value: Date): String {
    return this.datePipe.transform(value, 'yyyy-MM-dd')!;
  }

  /**
   * Generic method for manipulate urlparam with date range info
   * and transform to Date[] for daterangepicker input
   */
  createDateStringFromBackendValue(value: any): string {
    if (value === "" || value === null || value === undefined) {
      return "";
    }
    return this.datePipe.transform(value, 'dd-MM-yyyy')!;
  }

  /**
   * Return array for today start and end datetime
   */
  getStartEndDateTimeArrayForLast12Months(): Date[] {
    let startDate = new Date();
    startDate.setMonth(new Date().getMonth() - 11);
    startDate.setDate(1);
    startDate.setHours(0, 0, 0, 0);

    let endDay = new Date();
    endDay.setHours(23, 59, 59, 999);
    return [startDate, endDay];
  }

  /**
   * Return date
   *
   * @param calculate boolean
   */
  getDateForDatePicker(
    calculate = false,
    operation = 'sub',
    qty = 0,
    unit = 'days'
  ): Date {

    let date = new Date();

    if (calculate) {
      if (operation === 'add') {
        if (unit === 'months') {
          date.setMonth(date.getMonth() + qty);
        }
        if (unit === 'days') {
          date.setDate(date.getDay() + qty);
        }
      }
      if (operation === 'sub') {
        if (unit === 'months') {
          date.setMonth(date.getMonth() - qty);
        }
        if (unit === 'days') {
          date.setDate(date.getDay() - qty);
        }
      }
    }

    return date;

  }

  /**
   * 
   * @param calculate 
   * @param operation 
   * @param qty 
   * @param unit 
   * @returns Array of dates
   */

  getDateForDateRangePicker(
    calculate = false,
    operation = 'sub',
    qty = 0,
    unit = 'days'
  ): Date[] {

    let start = new Date();

    let end = new Date();

    if (calculate) {
      if (operation === 'add') {
        if (unit === 'months') {
          start.setMonth(start.getMonth() + qty);
        }
        if (unit === 'days') {
          start.setDate(start.getDay() + qty);
        }
      }
      if (operation === 'sub') {
        if (unit === 'months') {
          start.setMonth(start.getMonth() - qty);
        }
        if (unit === 'days') {
          start.setDate(start.getDay() - qty);
        }
      }
    }

    return [start, end];

  }

  createDateFromUrlParamString(
    value: string | undefined,
    calculate = false,
    operation = 'sub',
    qty = 0,
    unit = 'days'): Date | string {

    if (value === "" || value === null || value === undefined) {
      return '';
    }

    let date = JSON.parse(value);
    date = new Date(date);

    // if(from.getHours() === to.getHours() && from.getMinutes() === to.getMinutes() && from.getSeconds() === to.getSeconds()) {
    //   from.setHours(0,0,0,0);
    //   to.setHours(23,59,59,999);
    // }

    if (calculate) {
      if (operation === 'add') {
        if (unit === 'months') {
          date.setMonth(date.getMonth() + qty);
        }
        if (unit === 'days') {
          date.setDate(date.getDay() + qty);
        }
      }
      if (operation === 'sub') {
        if (unit === 'months') {
          date.setMonth(date.getMonth() - qty);
        }
        if (unit === 'days') {
          date.setDate(date.getDay() - qty);
        }
      }
    }

    return date;

  }

  getDaysInMonth(date: Date) {
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return new Date(year, month, 0).getDate();
  }

  /**
   * Return array for next 30 days start and end datetime
   */
  getStartEndDateTimeArrayForNext30Days(): Date[] {
    let startDate = new Date();
    startDate.setHours(0, 0, 0, 0);

    let endDay = new Date();
    endDay.setDate(new Date().getDate() + 30);
    endDay.setHours(23, 59, 59, 999);
    return [startDate, endDay];
  }

}
