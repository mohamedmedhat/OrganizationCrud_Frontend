import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'auth',
    title: 'auth',
    children: [
      {
        path: 'register',
        title: 'regisetr',
        loadComponent: () =>
          import('./features/register/register.component').then(
            (r) => r.RegisterComponent
          ),
      },
      {
        path: 'login',
        title: 'login',
        loadComponent: () =>
          import('./features/login/login.component').then((l) => l.LoginComponent),
      },
    ],
  },
  {
    path: '',
    title: 'home',
    component: AppComponent,
  },
  {
    path: '**',
    title: 'page not found',
    component: NotFoundComponent,
  },
];
