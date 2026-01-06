import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../product-service';

@Component({
  selector: 'app-product-component',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product-component.html',
  styleUrl: './product-component.css',
})
export class ProductComponent implements OnInit {
  productData!: any;
  constructor(private ps: ProductService) {}
  ngOnInit() {
    this.productData = this.ps.getProductDetails();
  }
}
