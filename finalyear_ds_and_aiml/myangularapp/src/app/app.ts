import { Component } from '@angular/core';

import { ProductComponent } from './component/product-component/product-component';

@Component({
  selector: 'app-root',
  imports: [ProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
