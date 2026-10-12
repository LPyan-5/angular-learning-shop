import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';

import { Auth } from './auth';
import { API_URL } from '../apis';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const user = inject(Auth).user();

  if (user && req.url.startsWith(API_URL)) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer demo-token-${user.role}`),
    });
    return next(authReq);
  }

  return next(req);
};