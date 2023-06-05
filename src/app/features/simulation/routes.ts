import { Routes } from '@angular/router';
import { SimulationService } from './simulation.service';

export const ROUTES: Routes = [
  {
    path: '',
    providers: [SimulationService],
    loadComponent: () => import('./simulation/simulation.component'),
    children: [
      { path: '', redirectTo: 'user-info', pathMatch: 'full' },
      {
        path: 'user-info',
        loadComponent: () =>
          import('./steps/user-info-step/user-info-step.component'),
      },
      {
        path: 'project-info',
        loadComponent: () =>
          import('./steps/project-info-step/project-info-step.component'),
      },
      {
        path: 'result',
        loadComponent: () =>
          import(
            './result/eligibility-result-page/eligibility-result-page.component'
          ),
      },
      // {
      //   path: 'non-eligible',
      //   loadComponent: () =>
      //     import(
      //       './result/ineligibility-result-page/ineligibility-result-page.component'
      //     ),
      // },
    ],
  },
];
