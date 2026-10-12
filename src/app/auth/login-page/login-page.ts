import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth';

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

  protected login() {
    this.auth.login('Liana');
    this.router.navigateByUrl(this.returnUrl());
  }
}
