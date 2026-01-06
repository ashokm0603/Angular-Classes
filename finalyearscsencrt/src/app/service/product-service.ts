import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ProductDetails {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productData!: ProductDetails;

  constructor(private pd: HttpClient) {}

  getProductDetails(): any {
    this.pd.get('../products.json').subscribe({
      next: (res) => {
        return res;
      },
      error: (err) => {
        return err;
      },
    });
  }
}
