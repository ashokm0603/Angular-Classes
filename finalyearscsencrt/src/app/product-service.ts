import { Injectable } from '@angular/core';
//declare interface what are the data need to store with strong datatypes
export interface Product {
  productId: number;
  name: string;
  price: number;
  description: string;
  ratings: string;
  image: string;
}
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productDetails: Product[] = [
    {
      productId: 100,
      name: 'Laptop',
      price: 100000,
      description: 'Good Product ',
      ratings: '⭐⭐⭐⭐⭐',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtGbK124YYWfS6_Rdjicw9MBJmWveXQCrK6A&s',
    },
    {
      productId: 200,
      name: 'Mobile',
      price: 50000,
      description: 'Good Product ',
      ratings: '⭐⭐⭐⭐',
      image: 'https://5.imimg.com/data5/PX/WQ/MN/SELLER-38271709/mobile.png',
    },
  ];

  getProductDetails(): Product[] {
    return this.productDetails;
  }
}
