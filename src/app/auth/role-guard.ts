import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from './auth';
import { Role } from './user';

export const roleGuard = (role: Role): CanActivateFn => () => {
  const auth = inject(Auth);
  const router = inject(Router);

  return auth.hasRole(role) || router.createUrlTree(['/forbidden']);
};