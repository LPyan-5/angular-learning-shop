import { CurrencyPipe } from '@angular/common';
import { Component,  input, computed , inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCatalog } from '../product-catalog';
import { Cart } from '../../cart/cart';

@Component({
  imports: [RouterLink, CurrencyPipe],
  selector: 'app-product-details-page',
  styleUrl: './product-details-page.css',
  templateUrl: './product-details-page.html',
})

export class ProductDetailsPage {
  protected readonly catalog = inject(ProductCatalog);
  protected readonly cart = inject(Cart);

  readonly id = input.required<string>();

  protected readonly product = computed(() => this.catalog.getById(Number(this.id())));
}
