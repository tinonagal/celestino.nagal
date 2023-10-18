import { Component } from '@angular/core';
import { Product } from '../Model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-v3',
  templateUrl: './product-v3.component.html',
  styleUrls: ['./product-v3.component.css']
})
export class ProductV3Component {

  product!:Product;
  productService:ProductService;

  constructor(productService: ProductService){
    this.productService=productService;
    this.product = this.productService.getProduct(1);
  }

}
