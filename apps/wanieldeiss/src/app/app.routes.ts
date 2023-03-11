import { Route } from '@angular/router';
import { IndexPage } from './pages';

export const appRoutes: Route[] = [
  {
    path: '',
    component: IndexPage,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
