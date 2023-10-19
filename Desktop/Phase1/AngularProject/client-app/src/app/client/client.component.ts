import { Component } from '@angular/core';
import { Client } from '../model/client';



@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  
    client:Client = new Client("Ben Graham","ben.graham@gmail.com","10 Ohio California","password1");
  // name:string = "Jong Wick";
  // email:string = "jong.wick@gmail.com";
  // address:string = "10 Ohio USA";
  // password:string = "password1";

   f1 = ():string => {
    alert("Thank you for submitting");
    return "Thank you";
  }

}
