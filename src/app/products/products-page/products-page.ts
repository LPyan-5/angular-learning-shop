import { RouterLink } from '@angular/router';
import { Component, inject, signal} from '@angular/core';

import { Cart } from '../../cart/cart';
import { ProductCatalog } from '../product-catalog';
import { ProductCard } from '../product-card/product-card';

@Component({
  imports: [RouterLink, ProductCard],
  selector: 'app-products',
  styleUrl: './products-page.css',
  templateUrl: './products-page.html',
})
export class Products {
  protected readonly cart = inject(Cart)
  protected readonly catalog = inject(ProductCatalog)
}
