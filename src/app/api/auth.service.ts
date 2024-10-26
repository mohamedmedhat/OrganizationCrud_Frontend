import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { usersProductionEnv } from '../../environments/env-prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  login(formGroup: FormGroup): Observable<any> {
    const formData = formGroup.value;
    const url = usersProductionEnv.loginUrl;
    return this.http.post(url, formData);
  }

  register(formGroup: FormGroup): Observable<any> {
    const formData = formGroup.value;
    const url = usersProductionEnv.regsiterUrl;
    return this.http.post(url, formData);
  }

  refreshToken(body: { token: string }): Observable<any> {
    const { token } = body;
    const url = usersProductionEnv.refreshTokenUrl;
    return this.http.post(url, token);
  }

  revokeToken(body: { refresh_token: string }): Observable<any> {
    const url = usersProductionEnv.revokeTokenUrl;
    return this.http.post(url, body.refresh_token);
  }

  isLogin(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token') ?? null;
  }

  logout() {
    return localStorage.removeItem('token');
  }
}
