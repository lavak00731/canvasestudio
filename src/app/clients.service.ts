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
}
