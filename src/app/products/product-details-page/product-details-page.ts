import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { httpResource } from '@angular/common/http';
import { Component, inject, input } from '@angular/core';

import { Product } from '../product';
import { API_URL } from '../../apis';
import { Cart } from '../../cart/cart';

@Component({
  selector: 'app-product-details-page',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-details-page.html',
  styleUrl: './product-details-page.css',
})
export class ProductDetailsPage {
  protected readonly cart = inject(Cart);

  readonly id = input.required<string>();

  protected readonly product = httpResource<Product>(() => `${API_URL}/products/${this.id()}`);
}