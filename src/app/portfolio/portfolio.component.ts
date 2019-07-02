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
  /* filterTags(elem: Array<string>) {
    
    if(this.services.length == 0) {
      return false;
    } else {
      return elem.filter(x => {
        console.log(this.services.some(r=> elem.indexOf(r) >= 0));
        this.services.some(r=> elem.includes(r));        
      })
    }
  } */
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
  }
  
}
