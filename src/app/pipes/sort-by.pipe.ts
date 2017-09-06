import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<any>, args?: any): any {
    if (array) {
      const sortField = args[0];
      const sortDirection = args[1];
      const modifier = sortDirection === 'asc' ? 1 : -1;

      array.sort((a: any, b: any) => {
        if (a[sortField] < b[sortField]) {
          return  -1 * modifier;
        } else {
          return  1 * modifier;
        }
      });

      return array;

    }
  }

}
