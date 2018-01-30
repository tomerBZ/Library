import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  /**
   * Pipe to make any string capitalized
   * @param value
   * @param args
   * @returns {string}
   */
  transform(value: string, args?: any): any {
    if (value !== null &&  typeof value !== 'undefined') {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }

}
