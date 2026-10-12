import { Component, computed, input, output, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartItem } from '../../cart/cart-item';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  productId = input.required<number>();
  name = input.required<string>();
  price = input.required<number>();
  addToCart = output<CartItem>();

  quantity = signal(0);
  total = computed(() => this.quantity() * this.price());
  
  increase() { this.quantity.update(q => q + 1); }
  decrease() { this.quantity.update(q => Math.max(0, q - 1)); }
  clear() {this.quantity.set(0);}
}