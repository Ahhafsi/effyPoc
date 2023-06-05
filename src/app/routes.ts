import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/simulation', pathMatch: 'full' },
  {
    path: 'simulation',
    loadChildren: () =>
      import('./features/simulation/routes').then((mod) => mod.ROUTES),
  },
];
