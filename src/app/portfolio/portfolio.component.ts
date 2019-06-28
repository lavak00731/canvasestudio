import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  clients: any[];
  featureList: any[] = [
      {
        'RWD': {
          isSelected: false,
          value: 'RWD'
        }
      },
      {
        'ecommerce': {
          isSelected: false,
          value: 'e-Commerce'
        }
      },
      {
        'wordpress': {
          isSelected: false,
          value: 'Wordpress'
        }
      },
      {
        'statichtml': {
          isSelected: false,
          value: 'Static Html'
        }
      },
      {
        'spa': {
          isSelected: false,
          value: 'SPA'
        }
      },
      {
        'contentstrategy': {
          isSelected: false,
          value: 'Content Strategy'
        }
      },
      {
        'onlineportfolio': {
          isSelected: false,
          value: 'Online Portfolio'
        }
      },
      {
        'print': {
          isSelected: false,
          value: 'Print'
        }
      }    
  ];

  constructor(private _clientService: ClientsService) { }

  ngOnInit() {
    this.clients = this._clientService.getClients();
    console.log(this.featureList[0].RWD.isSelected);
  }
  
}
