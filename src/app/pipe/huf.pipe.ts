import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'huf'
})
export class HufPipe implements PipeTransform {

  transform(amount: number | null): string | any {
    if (!amount) {
      return amount;
    }

    const formatter = new Intl.NumberFormat('hu-HU', {
      style: 'currency',
      currency: 'HUF',
      maximumSignificantDigits: 10,
    });

    return formatter.format(amount);

  }

}
