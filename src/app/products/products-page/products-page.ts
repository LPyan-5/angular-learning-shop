import { Component, inject} from '@angular/core';
import { Cart } from '../../cart/cart';
import { ProductCard } from '../product-card/product-card';
import { ProductCatalog } from '../product-catalog';
import { RouterLink } from '@angular/router';

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
