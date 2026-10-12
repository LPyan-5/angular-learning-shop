import { computed, effect, inject, Service, signal } from '@angular/core';
import { Router } from '@angular/router';


function loadUser(): string | null {
    try {
      const saved = localStorage.getItem('user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  }

@Service()
export class Auth {
  private readonly _user = signal<string | null>(loadUser());

  private readonly router = inject(Router);

  readonly user = this._user.asReadonly();
  readonly isLoggedIn = computed(() => this._user() !== null);

  constructor() {    
    effect(() => {
        const user = this._user();
        if (!user) {
          localStorage.removeItem('user');
        } else {
          localStorage.setItem('user', JSON.stringify(user));
        }
      });
  }

  login(name: string) {
    this._user.set(name);
  }

  logout() {
    this._user.set(null);
    this.router.navigateByUrl('/')
  }
}