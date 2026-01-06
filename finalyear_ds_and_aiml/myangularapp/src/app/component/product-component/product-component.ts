import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product-service';
import { ProductModel } from '../../model/product-model';

@Component({
  selector: 'app-product-component',
  imports: [],
  templateUrl: './product-component.html',
  styleUrl: './product-component.css',
})
export class ProductComponent implements OnInit {
  productData: ProductModel[] = [];
  constructor(private ps: ProductService) {}
  ngOnInit(): void {
    this.productData = this.ps.getProductDetails();
  }
}
