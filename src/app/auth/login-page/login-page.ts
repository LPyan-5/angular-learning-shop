import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth';
import { Role } from '../user';

@Component({
  imports: [],
  selector: 'app-login-page',
  styleUrl: './login-page.css',
  templateUrl: './login-page.html',
})
export class LoginPage {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  readonly returnUrl = input('/');

  protected login(role: Role) {
    this.auth.login(role === 'admin' ? 'Admin Anna' : 'User Liana', role);
    this.router.navigateByUrl(this.returnUrl());
  }
}
