import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Products } from './products/products';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { AddProduct } from './add-product/add-product';
import { EditProduct } from './edit-product/edit-product';

export const routes: Routes = [
  {
    path: 'products',
    component: Products,
    children: [
      { path: 'list', component: ProductList },
      { path: 'details/:id', component: ProductDetails },
      { path: 'add', component: AddProduct },
      { path: 'edit/:id', component: EditProduct },
    ],
  },
  { path: '', redirectTo: '/products/list', pathMatch: 'full' }, // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppModule {}
