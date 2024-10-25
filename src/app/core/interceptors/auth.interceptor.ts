import {
  HttpEvent,
  HttpRequest,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpErrorResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, switchMap, filter, take } from 'rxjs/operators';
import { AuthService } from '../../api/auth.service';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const authService = inject(AuthService);
  const isRefreshing = { value: false };
  const refreshTokenSubject: BehaviorSubject<string | null> =
    new BehaviorSubject<string | null>(null);

  const addToken = (request: HttpRequest<any>, token: string) => {
    return request.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  };

  const handle401Error = (
    request: HttpRequest<any>,
    next: HttpHandlerFn
  ): Observable<HttpEvent<any>> => {
    if (!isRefreshing.value) {
      isRefreshing.value = true;
      refreshTokenSubject.next(null);

      const refreshToken = localStorage.getItem('refresh_token');
      if (!refreshToken) {
        authService.logout();
        return throwError(() => new Error('Refresh token not available'));
      }

      return authService.refreshToken({ token: refreshToken }).pipe(
        switchMap((response) => {
          isRefreshing.value = false;
          const newAccessToken = response.accessToken;
          localStorage.setItem('token', newAccessToken);
          refreshTokenSubject.next(newAccessToken);
          return next(addToken(request, newAccessToken));
        }),
        catchError((err) => {
          isRefreshing.value = false;
          authService.logout();
          return throwError(() => new Error('Token refresh failed'));
        })
      );
    } else {
      return refreshTokenSubject.pipe(
        filter((token) => token != null),
        take(1),
        switchMap((token) => next(addToken(request, token!)))
      );
    }
  };

  const token = authService.getToken();
  const clonedReq = token ? addToken(req, token) : req;

  return next(clonedReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        return handle401Error(clonedReq, next);
      }
      return throwError(() => error);
    })
  );
};
