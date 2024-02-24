import { Injectable } from '@angular/core';
// import * as moment from 'moment';
// import 'moment-timezone';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

    constructor(private datePipe: DatePipe) {
    }

    getTimePickerOptions(maxDate = '', autoUpdateInput = false, format = 'HH:mm', timePicker = true) {
      let dateTimeCalendar: any;
      dateTimeCalendar = {
        singleDatePicker: true,
        timePicker: true,
        timePicker24Hour: true,
        timePickerIncrement: 1,
        timePickerSeconds: true,
        locale: {
          format: format,
          cancelLabel: 'Cancelar',
          applyLabel: 'Aplicar',
          daysOfWeek: this.daysOfWeek(),
          monthNames: this.monthNames(),
          firstDay: 1
        }
      };
      return dateTimeCalendar;
    }

    getEmptySingleCalendarOptions(maxDate = '', autoUpdateInput = false, format = 'DD-MM-YYYY HH:mm', timePicker = true) {
      let dateTimeCalendar: any;
      dateTimeCalendar = {
        singleDatePicker: true,
        autoUpdateInput: autoUpdateInput,
        showDropdowns: true,
        timePicker: timePicker,
        maxDate: maxDate,
        locale: {
          format: format,
          cancelLabel: 'Cancelar',
          applyLabel: 'Aplicar',
          daysOfWeek: this.daysOfWeek(),
          monthNames: this.monthNames(),
          firstDay: 1
        }
      };
      return dateTimeCalendar;
    }

    getDateTimeCalendarOptions(maxDate = '', autoUpdateInput = false, startDate = new Date()) {
      let dateTimeCalendar: any;
      dateTimeCalendar = {
        singleDatePicker: true,
        autoUpdateInput: autoUpdateInput,
        showDropdowns: true,
        timePicker: true,
        maxDate: maxDate,
        startDate,
        locale: {
          format: 'DD-MM-YYYY HH:mm',
          cancelLabel: 'Cancelar',
          applyLabel: 'Aplicar',
          daysOfWeek: this.daysOfWeek(),
          monthNames: this.monthNames(),
          firstDay: 1
        }
      };
      return dateTimeCalendar;
    }

    /**
     *
     * @param maxDate string
     */
    getSingleCalendarOptions(
      maxDate = '',
      minDate= '',
      timePicker = false,
      format = 'DD-MM-YYYY',
      autoUpdateInput = false,
      timePickerIncrement = 1,
      showDropdowns = true
      ) {

      let singleCalendar: any;
      singleCalendar = {
        singleDatePicker: true,
        autoUpdateInput: autoUpdateInput, // Set false to set input initially empty.
        showDropdowns: showDropdowns,
        timePicker: timePicker,
        maxDate: maxDate,
        minDate: minDate,
        timePickerIncrement: timePickerIncrement, //  Increment of the minutes selection list for times.
        autoApply: true, // Hide the apply and cancel buttons, and automatically apply a new date range as soon as two dates are clicked.
        locale: {
          format: format,
          daysOfWeek: this.daysOfWeek(),
          monthNames: this.monthNames(),
          firstDay: 1,
          cancelLabel: 'Cancelar',
          applyLabel: 'Aplicar',
        }
      };
      return singleCalendar;
    }

    daysOfWeek() {
      return ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
    }

    monthNames() {
      return [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
      ];
    }

  /**
   *
   */
  getDateRangePickerOptions() {
    let calendar: any;

    calendar = {
      locale: {
        format: 'YYYY-MM-DD HH:mm:ss Z',
        cancelLabel: 'Cancelar',
        applyLabel: 'Aplicar',
        customRangeLabel: 'Personalizar'
      },
      autoUpdateInput: false,
      timePicker: true,
      ranges: {
        // 'Hoy': [moment().startOf('day'), moment()],
        // 'Ayer': [moment().subtract(1, 'days').startOf('day'), moment().subtract(1, 'days').endOf('day')],
        // 'Ultimos 7 dias': [moment().subtract(6, 'days').startOf('day'), moment()],
        // 'Ultimos 30 dias': [moment().subtract(29, 'days').startOf('day'), moment()],
        // 'Este mes': [moment().startOf('month'), moment().endOf('month')],
        // 'Mes Anterior': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
        // 'Este año': [moment().startOf('year'), moment().endOf('year')],
        // 'Año Anterior': [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')]
      },
    };

    return calendar;

  }

  /**
   * Format dates.
   *
   * When we use daterangepicker extension we need to manipulate
   * the dates in order to adjust to backend standard.
   *
   * In this case this method is usefull when we are using
   * filters between dates and we need tu fullfill input.
   *
   * @param from: any
   * @param to: any
   */
  public formatDateRange(from: any, to: any) {
    let separator: any, dates: any;
    separator = ',';
    from = this.datePipe.transform(from, 'yyyy-MM-dd HH:mm:ss Z');
    to = this.datePipe.transform(to, 'yyyy-MM-dd HH:mm:ss Z');
    dates = from.concat(separator, to);
    return dates;
  }

  /**
   * Set field value after select date from datepicker.
   *
   * We need to use this method just in case we have set:
   * autoUpdateInput: false
   * In this case the input value won't be update automatically.
   *
   * @param value any
   */
  formatDateCalendar (value: any) {
    let date: any;
    date = this.datePipe.transform(value.start, 'dd-MM-yyyy');
    return date;
  }

  /**
   * Set field value after select date from datepicker.
   *
   * We need to use this method just in case we have set:
   * autoUpdateInput: false
   * In this case the input value won't be update automatically.
   *
   * @param value any
   */
  formatDate (value: any) {
    let date: any;
    date = this.datePipe.transform(value, 'dd-MM-yyyy');
    return date;
  }

  moment() {
    // return moment();
  }

  startDay() {
    // return moment().startOf('day');
  }

}
