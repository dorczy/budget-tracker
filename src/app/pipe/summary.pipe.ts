import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any[] | null, key: string): number | any {
    if(!Array.isArray(value) || !key) {
      return value;
    }

    const sumArr: number[] = [];

    value.forEach( item => {
      sumArr.push(item[key]);
    });

    const result = sumArr.reduce( (accum, curr) => accum + curr, 0 );

    return result;
  }

}
