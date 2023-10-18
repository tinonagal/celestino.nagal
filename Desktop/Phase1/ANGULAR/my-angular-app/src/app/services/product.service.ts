import { Injectable } from '@angular/core';
import { Product } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[] = [];
  
  constructor() {
    // this.products[0] = new Product("MacbookAir",2500,"MacbookAir 2023 Model","assets/images/MacbookAir.jpeg");
    // this.products[1] = new Product("HP Laptop",2200,"HP 2023 Model","assets/images/HP laptop.jpeg");
    // this.products[2] = new Product("Lenovo Laptop",2100,"Lenovo 2023 Model","assets/images/Lenovo laptop.jpeg");
    // this.products[3] = new Product("Dell Laptop",2300,"Dell 2023 Model","assets/images/Dell laptop.jpeg");
  }
  getProduct(prodNum: number = 0): Product {
    return this.products[prodNum];
  }
  getAllProduct(): Product[] {
    return this.products;
  }
}

