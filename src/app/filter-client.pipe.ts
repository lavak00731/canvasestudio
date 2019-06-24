import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterClient'
})
export class FilterClientPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args == "") {      
      return value;
                            
     
    }  else  {
      let argumentProcess =  value.map(function(elem) {
        console.log(elem.tags);
       
                              
                                
                             });
                            
      
    }   
  }

}
