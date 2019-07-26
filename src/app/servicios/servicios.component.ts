import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  services: any[];

  constructor(private _services: ServicesService ) { 

  }

  ngOnInit() {
    this.services = this._services.getService();
    
      
  } 
  subjectTrigger (title: string) {
    console.log(title);
  }
}
