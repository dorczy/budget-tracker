import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[] | null, key: string, ascend: boolean): any[] | null {
    if( !Array.isArray(value) || !key ) {
      return value;
    }

    if (ascend === true) {
      return value.sort((a, b) => {
        if (parseInt(a[key]) !== NaN && parseInt(b[key]) !== NaN) {
          return a[key] - b[key];
        } else {
          a = a[key].toString().toLowerCase();
          b = b[key].toString().toLowerCase();
          return a.localeCompare(b);
        }
      })
    } else {
      return value.sort((a, b) => {
        if(parseInt(a[key]) !== NaN && parseInt(b[key]) !== NaN) {
          return b[key] - a[key];
        } else {
          a = a[key].toString().toLowerCase();
          b = b[key].toString().toLowerCase();
          return b.localeCompare(a);
        }
      })

    }

  }

}
