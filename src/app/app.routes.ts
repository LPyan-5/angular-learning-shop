import { Routes } from '@angular/router';
import { Products } from './products/products-page/products-page';
import { CartPage } from './cart/cart-page/cart-page';
import { ProductDetailsPage } from './products/product-details-page/product-details-page';

export const routes: Routes = [
    {path: '', component: Products},
    {path: 'cart', component: CartPage},
    {path: 'products/:id', component: ProductDetailsPage },
    {path: '**', redirectTo: '' },
];
