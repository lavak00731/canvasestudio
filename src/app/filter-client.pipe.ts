import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'minimatch';

@Pipe({
  name: 'filterClient',
  pure: false
})
export class FilterClientPipe implements PipeTransform {
  
  transform(value: any, args?: any): any {
    let filtered: any[] = [];
    let item: object;
    let itemTags: any[] = [];
    if(args.length == 0) {
      return value;
    } else {
      for (let i = 0; i < value.length; i++) {
        item = value[i];
        itemTags = value[i].services;
        if(args.some(r=> itemTags.includes(r))) {
          filtered.push(item);
        }       
      }
      return filtered;
    }   
    
  }  

}
