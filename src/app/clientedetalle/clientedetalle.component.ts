import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientedetalle',
  templateUrl: './clientedetalle.component.html',
  styleUrls: ['./clientedetalle.component.scss']
})
export class ClientedetalleComponent implements OnInit {

  client: any;
  constructor(private service: ClientsService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {    
      
      console.log(params.id); 
      this.client = service.returnClient(params.id);
     
    });
  }
  ngOnInit() {}

}
