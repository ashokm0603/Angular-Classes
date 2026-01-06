import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RouterModule } from '@angular/router'; // ✅ add this
@Component({
  selector: 'app-products',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {}
