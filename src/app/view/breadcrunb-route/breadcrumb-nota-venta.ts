import { Breadcrumb } from "../layout/breadcrumb/breadcrumb.interface";

export const BreadcrumbNotaVenta: Breadcrumb[] = [
  {
    label: '',
    type: 'link',
    icon: 'home',
    link: '/home'
  },
  {
    label: 'Ventas',
    type: 'text',
    icon: 'shopping'
  },
  {
    label: 'Registro de Ventas',
    type: 'text',
    icon: 'audit'
  },
  {
    label: 'Nota de Venta',
    type: 'text'
  }
]
