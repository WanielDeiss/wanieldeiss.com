import { Routes } from '@angular/router';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { IndexPage } from './pages';

export const appRoutes: Routes = [
  {
    path: '',
    component: IndexPage,
  },
  {
    path: 'not-found',
    component: NotFoundPage,
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
