import { Routes } from '@angular/router';
import { Products } from './products/products-page/products-page';
import { CartPage } from './cart/cart-page/cart-page';
import { ProductDetailsPage } from './products/product-details-page/product-details-page';
import { authGuard } from './auth/auth-guard';
import { LoginPage } from './auth/login-page/login-page';

export const routes: Routes = [
    {path: '', component: Products},
    {path: 'products/:id', component: ProductDetailsPage },
    { path: 'cart', component: CartPage, canActivate: [authGuard] },
    { path: 'login', component: LoginPage },
    {path: '**', redirectTo: '' },
];
