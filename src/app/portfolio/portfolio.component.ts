import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  clients: any[];

  constructor(private _clientService: ClientsService) { }

  ngOnInit() {
    this.clients = this._clientService.getClients();
    console.log(this.clients);
  }

}
