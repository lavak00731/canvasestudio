import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-clientedetalle',
  templateUrl: './clientedetalle.component.html',
  styleUrls: ['./clientedetalle.component.scss']
})
export class ClientedetalleComponent implements OnInit {

  constructor(private service: ClientsService, private route: ActivatedRoute) { }
  client: {};
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
       
      this.client = this.service.getClients();
      console.log(this.client);
       
      });
  }

}
