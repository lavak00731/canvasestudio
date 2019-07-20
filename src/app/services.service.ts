import { Injectable } from '@angular/core';
import { SERVICES } from './services-collection';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  getService() {
    return SERVICES;
  }
}
