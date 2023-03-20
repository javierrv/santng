import { Pipe, PipeTransform } from '@angular/core';
import { Item, products } from './items';
const { isArray } = Array;

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(products: Item[], find: string): Item[] {
    if (!products) return [];
    if (!find) return products;
    find = find.toLowerCase();
    return search(products, find);
   }
}

function search(entries: any[], search: string) {

  search = search.toLowerCase();

  return entries.filter(function (obj) {
    const keys: string[] = Object.keys(obj);
    return keys.some(function (key) {
      const value = obj[key];
      if (isArray(value)) {
        return value.some(v => {
          return v.toLowerCase().includes(search);
        });
      } else if (!isArray(value)) {
        return value.toLowerCase().includes(search);
      }
    });
  });
}