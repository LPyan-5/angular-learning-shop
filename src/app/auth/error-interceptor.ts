import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';

import { Auth } from './auth';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(Auth);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error(`HTTP ${error.status} for ${req.url}`);
      if (error.status === 401) {
        auth.logout();
      }
      return throwError(() => error);
    }),
  );
};