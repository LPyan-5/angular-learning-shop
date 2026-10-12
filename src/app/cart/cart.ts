import { computed, effect, Service, signal } from '@angular/core';
import { CartItem } from './cart-item';

function loadCart(): CartItem[] {
  try {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

@Service()
export class Cart {
  readonly items = signal<CartItem[]>(loadCart());

  readonly count = computed(() => this.items().reduce((sum, i) => sum + i.quantity, 0));
  readonly total = computed(() => this.items().reduce((sum, i) => sum + i.quantity * i.price, 0));

  constructor() {
    effect(() => {
      localStorage.setItem('cart', JSON.stringify(this.items()));
    });
  }

  add(item: CartItem) {
    this.items.update(items => {
      const exists = items.some(i => i.id === item.id);
      return exists
        ? items.map(i => (i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i))
        : [...items, item];
    });
  }

  remove(id: number) {
    this.items.update(items => items.filter((item) => item.id !== id));
  }
}