import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[] | null, phrase: string | number | boolean, key: string): any[] | null {
    if( !Array.isArray(value) || !phrase || !key) {
      return value;
    }
    phrase = typeof phrase !== "number" ? ("" + phrase).toLowerCase() : phrase;

    return value.filter( item => {
      // object
      if (typeof item[key] === "object") {
        return ("" + item[key]["name"]).toLowerCase().includes( (phrase as string) );
      }

      // string, number
      return ("" + item[key]).toLowerCase().includes( (phrase as string) );
    } )
  }

}
