import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    title: 'auth',
    children: [
      {
        path: 'register',
        title: 'register',
        loadComponent: () =>
          import('./features/auth/register/register.component').then(
            (r) => r.RegisterComponent
          ),
      },
      {
        path: 'login',
        title: 'login',
        loadComponent: () =>
          import('./features/auth/login/login.component').then(
            (l) => l.LoginComponent
          ),
      },
    ],
  },
  {
    path: 'organization',
    title: 'organization',
    children: [
      {
        path: 'list',
        title: 'organizationList',
        canActivate: [AuthGuard],
        loadComponent: () =>
          import(
            './features/organization/organization-items/organization-items.component'
          ).then((i) => i.OrganizationItemsComponent),
      },
      {
        path: 'members/:organizationId',
        title: 'members',
        canActivate: [AuthGuard],
        loadComponent: () =>
          import(
            './features/organization/organization-members/organization-members.component'
          ).then((m) => m.OrganizationMembersComponent),
      },
      {
        path: 'form/create',
        title: 'organizationForm',
        canActivate: [AuthGuard],
        loadComponent:() => import('./features/organization/organization-form/organization.component').then(f => f.OrganizationComponent)
      }
    ],
  },
  {
    path: '',
    title: 'home',
    canActivate: [AuthGuard],
    component: AppComponent,
  },
  {
    path: '**',
    title: 'page not found',
    component: NotFoundComponent,
  },
];
