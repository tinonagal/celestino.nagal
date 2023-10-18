import { Component } from '@angular/core';
import { Product } from '../Model/product';
import { ProductV2Service } from '../services/product-v2.service';

@Component({
  selector: 'app-product-list-v4',
  templateUrl: './product-list-v4.component.html',
  styleUrls: ['./product-list-v4.component.css']
})
export class ProductListV4Component {
  products: Product[] = [];

  constructor(private productService: ProductV2Service) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      products => {
        this.products = products;
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }

}