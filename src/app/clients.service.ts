import { Injectable } from '@angular/core';
import { CLIENTS } from './clientList';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  
  constructor() {}

  getClients() {
    return CLIENTS;
  }
  returnClient(id:string) {
    let returnedClient: any;
      CLIENTS.forEach(function(elem){
        if(id == elem.id) {
          console.log(elem);
          returnedClient = elem;
        }
      });
      console.log(returnedClient);
      return returnedClient;
  }
}
