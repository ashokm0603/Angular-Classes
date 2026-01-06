import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  template: `
    <h3>Product Details</h3>
    <p>Showing details for product ID: {{ productId }}</p>
    <a [routerLink]="['/products/edit', productId]">Edit Product</a>
  `,
})
export class ProductDetails {
  productId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
    });
  }
}
