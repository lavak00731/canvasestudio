import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  clients: any[];
  featureList: any[] = [];

  constructor(private _clientService: ClientsService) { }

  ngOnInit() {
    this.clients = this._clientService.getClients();
  }
  checkValue (elem: string, event: any) {
    if (event.target.checked) {
      this.featureList.push(elem);
     } else {
        for( let i = 0; i < this.featureList.length; i++){ 
          if ( this.featureList[i] === elem) {
            this.featureList.splice(i, 1); 
          }
        }
    }
  };
}
