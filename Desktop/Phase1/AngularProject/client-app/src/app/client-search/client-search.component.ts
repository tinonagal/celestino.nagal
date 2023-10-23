import { Component } from '@angular/core';
import { Client } from '../model/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent {

  client!:Client;
  clientService:ClientService

  constructor(clientService:ClientService){
    this.clientService=clientService;
    this.client = this.clientService.getClient(2);

  }

  

}
