import { Component, Input } from '@angular/core';
import { Product } from '../Model/product';

@Component({
  selector: 'app-product-v2',
  templateUrl: './product-v2.component.html',
  styleUrls: ['./product-v2.component.css']
})
export class ProductV2Component {

  product!:Product;// = new Product("MacbookAir",2500,"MacbookAir 2023 Model","assets/images/MacbookAir.jpeg")
  
  // <!-- Demo message from Parent to child -->
  @Input('var1') messageFromParent!:string;

  f2=()=> console.log(this.messageFromParent);
  

}
