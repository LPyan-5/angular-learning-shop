import { computed, effect, inject, Service, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Role, User } from './user';


function loadUser(): User | null {
    try {
      const saved = localStorage.getItem('user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  }

@Service()
export class Auth {
  private readonly _user = signal<User | null>(loadUser());

  private readonly router = inject(Router);

  readonly user = this._user.asReadonly();
  readonly isLoggedIn = computed(() => this._user() !== null);
  readonly isAdmin = computed(() => this._user()?.role === 'admin');

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

  hasRole(role: Role) {
    return this._user()?.role === role;
  }

  login(name: string, role: Role) {
    this._user.set({name, role});
  }

  logout() {
    this._user.set(null);
    this.router.navigateByUrl('/')
  }
}