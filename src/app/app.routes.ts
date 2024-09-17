import { Routes } from '@angular/router';
import { authGuard } from './view/guards/auth.guard';
import { BreadcrumbStockAlmacenFecha } from './view/breadcrunb-route/breadcrumb-stock-almacen-fecha';
import { BreadcrumbHome } from './view/breadcrunb-route/breadcrumb-home';
import { BreadcrumbMiCuenta } from './view/breadcrunb-route/breadcrumb-mi-cuenta';
import { BreadcrumbNotaVenta } from './view/breadcrunb-route/breadcrumb-nota-venta';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./view/layout/layout.component'),
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () => import('./view/home/home.component'),
        data: BreadcrumbHome
      },
      {
        path: 'stock-almacen-fecha',
        loadComponent: () => import('./view/modules/almacen/consultas/stock-almacen-fecha/stock-almacen-fecha.component'),
        data: BreadcrumbStockAlmacenFecha
      },
      {
        path: 'mi-cuenta',
        loadComponent: () => import('./view/auth/mi-cuenta/mi-cuenta.component'),
        data: BreadcrumbMiCuenta
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'test',
        loadComponent: () => import('./view/test-padre/test-padre.component'),
      },
      {
        path: 'nota-venta',
        loadComponent: () => import('./view/modules/ventas/registro-ventas/nota-venta/nota-venta.component'),
        data: BreadcrumbNotaVenta
      }
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./view/auth/login/login.component')
  },
  {
    path: 'no-page-found',
    loadComponent: () => import('./view/auth/no-page-found/no-page-found.component')
  },
  {
    path: '**',
    redirectTo: 'no-page-found'
  }
];
