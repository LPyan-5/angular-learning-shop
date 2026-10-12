import { Component, inject } from '@angular/core';
import { CartSummary } from './cart/cart-summary/cart-summary';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { Auth } from './auth/auth';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CartSummary],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly auth = inject(Auth)
}
