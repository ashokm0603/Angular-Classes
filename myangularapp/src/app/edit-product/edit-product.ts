import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  imports: [],
  template: `
    <h3>Edit Product</h3>
    <p>Editing product with ID: {{ productId }}</p>
    <form>
      <label>Product Name:</label>
      <input type="text" />
      <button type="submit">Update</button>
    </form>
  `,
})
export class EditProduct {
  productId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
    });
  }
}
