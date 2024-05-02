import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./view/layout/layout.component'),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./view/home/home.component'),
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];
