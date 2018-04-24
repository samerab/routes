import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], search: string) {
   let arr = [];
    value.forEach( item => {
        for (var prop in item){
            if (item[prop].toString().toLowerCase().indexOf(search) > -1){
              arr.push(item);
              break;
            } 
            
        }
    });

    return arr;
  }

}
