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
    // // key = key === ('category' ? 'category[name]' : key) || ('user' ? 'user.name' : key)

    // console.log(key);

    // if (key === 'category') {
    //   key = 'category' + '[name]';
    // } else if (key === 'user') {
    //   key = 'user.name'
    // }
    // console.log(key);

    return value.filter( item => {
      if(typeof item[key] === "number" && typeof phrase === "number") {
        return item[key] === phrase;
      }
      return ("" + item[key]).toLowerCase().includes( (phrase as string) );
    } )
  }

}
