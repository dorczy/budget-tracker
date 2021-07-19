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


    // HASZNÁLATA:
    //   <td class="sumCell">
    //     Current amount:&nbsp;
    //     {{ orderList$ | async | filter:filterKey:phrase | slice: (indexPage -1)*pagiLength: indexPage*pagiLength | summary:'amount' }} <br>
    //     Total amount:&nbsp;
    //     {{ orderList$ | async | summary:'amount' }}
    //   </td>
    // 1. Interpolációval megjelenítjük a teljes listát.
    // 2. Majd erre rátesszük a summary pipe-ot.
    // 3. String-ként átadjuk neki, hogy a listából az entitás melyik adatát akarjuk összesíteni.
  }

}
