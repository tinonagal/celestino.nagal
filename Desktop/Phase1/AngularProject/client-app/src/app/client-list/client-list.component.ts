import { Component } from '@angular/core';
import { Client } from '../model/client';

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {

  client:Client[] = [];

  constructor(){
    this.client[0] = new Client("Ben Graham","ben.graham@gmail.com","10 Ohio California","password0");
    this.client[1] = new Client("John Wick","john.wick@gmail.com","12 Hon Dunedin","password1");
    this.client[2] = new Client("Martin Hughes","martinh.graham@gmail.com","13 Peace Christchurch","password2");
    this.client[3] = new Client("Jimmy Fallo","jimmyf@gmail.com","1 Benny Hill","password3");
    this.client[4] = new Client("Forest Gump","forestg@gmail.com","3 Quiapo Manila","password4");
    // this.client[5] = new Client("Gina Hill","ginah@gmail.com","31 Samploc Manila","password5");
  }

}
