import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  clients: any[];  
  services: any[] = [];
  constructor(private _clientService: ClientsService) { }

  ngOnInit() {
    this.clients = this._clientService.getClients();    
  }
  checkTags(event: any) {  
    if (event.target.checked)  {
      this.services.push(event.target.value);
    } else {
      for( var i = 0; i < this.services.length; i++){ 
        if ( this.services[i] === event.target.value) {
          this.services.splice(i, 1); 
          i--;
        }
      }
    }
    if (window.innerWidth < 768) {
      let target = <HTMLElement> document.querySelector('.card-columns').offsetTop;
      document.querySelector('body, html').scrollTo({
        top: target,
        behavior: 'smooth'
      })
    }     
  } 
}
