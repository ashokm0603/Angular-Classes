import { Injectable } from '@angular/core';
import { ProductModel } from '../model/product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productDetails: ProductModel[] = [
    {
      id: 100,
      name: 'Laptop',
      price: 500000,
      ratings: '⭐⭐⭐⭐',
      imageUrl: '',
      description: '',
    },
    {
      id: 200,
      name: 'Mobile',
      price: 500000,
      ratings: '⭐⭐⭐⭐',
      imageUrl: '',
      description: '',
    },
  ];

  getProductDetails(): ProductModel[] {
    return this.productDetails;
  }
}
