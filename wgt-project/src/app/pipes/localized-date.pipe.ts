import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localizedDate',
  pure: false,
})
export class LocalizedDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}
  //pattern parameter default format is ‘mediumDate’.
  transform(value: any, pattern: string = 'mediumDate'): any {
    if (value) return this.datePipe.transform(value, pattern, undefined);
  }
}
