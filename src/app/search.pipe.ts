import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchText: string): any[] {
    if (!value) {
      return [];
    }
    if (!searchText) {
      return value;
    }
    searchText = searchText.toLowerCase();
    console.log(searchText);
    return value.filter(data => {
      return data.name.toLowerCase().includes(searchText);
    });
  }
}
