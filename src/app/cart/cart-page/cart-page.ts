import { Component, inject } from '@angular/core';
import { Cart } from '../cart';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-cart-page',
  styleUrl: './cart-page.css',
  templateUrl: './cart-page.html',
})
export class CartPage {
  protected readonly cart =  inject(Cart)
}
