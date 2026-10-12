import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Cart } from '../cart';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-cart-summary',
  styleUrl: './cart-summary.css',
  templateUrl: './cart-summary.html',
})

export class CartSummary {
  protected readonly cart = inject(Cart);
}
