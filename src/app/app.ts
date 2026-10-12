import { Component } from '@angular/core';
import { CartSummary } from './cart/cart-summary/cart-summary';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CartSummary],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {}
