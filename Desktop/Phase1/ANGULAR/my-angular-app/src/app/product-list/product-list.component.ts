import { Component } from '@angular/core';
import { Product } from '../Model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products:Product[] = [];

  constructor(){
    // this.products[0] = new Product("MacbookAir",2500,"MacbookAir 2023 Model","assets/images/MacbookAir.jpeg");
    // this.products[1] = new Product("HP Laptop",2200,"HP 2023 Model","assets/images/HP laptop.jpeg");
    // this.products[2] = new Product("Lenovo Laptop",2100,"Lenovo 2023 Model","assets/images/Lenovo laptop.jpeg");
    // this.products[3] = new Product("Dell Laptop",2300,"Dell 2023 Model","assets/images/Dell laptop.jpeg");
  }

}
