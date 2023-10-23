import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent {

  clientForm!: FormGroup;

  isClientNameInvalid: boolean = false;
  isClientEmailInvalid: boolean = false;
  isClientAddressInvalid: boolean = false;
  isClientPasswordInvalid: boolean = false;

  constructor(private fb: FormBuilder, private clientService: ClientService){
    this.clientForm = this.fb.group({
      clientName: ['',[Validators.required]],
      clientEmail: ['',[Validators.required]],
      clientAddress: ['',[Validators.required]],
      clientPassword: ['',[Validators.required, Validators.minLength(6)]],
      ReEnterPassword: ['',[Validators.required, Validators.minLength(6)]]
    });
  }


createClient(){
  console.log('New Client Added', this.clientForm.value);
  
}
}
