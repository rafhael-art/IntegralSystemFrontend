import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NzIconModule,
    NzToolTipModule,
    NzMenuModule,
    BreadcrumbComponent
  ],
  templateUrl: './layout.component.html',
  styles: [
    `
      [nz-menu] {
        width: 238px;
      };
      [nz-menu]{
        color: 'red'
      }
    `
  ]
})
export default class LayoutComponent {

  selectedMenuItemContabilidad: string | null = null;
  selectedMenuItemSistema: string | null = null;
  selectedMenuItemCompras: string | null = null;
  selectedMenuItemVentas: string | null = null;
  selectedMenuItemAlmacen: string | null = null;


  selectMenuItem(menu: string, item: string) {
    const menuItems: { [key: string]: string | null } = {
      'contabilidad': null,
      'sistema': null,
      'compras': null,
      'ventas': null,
      'almacen': null
    };

    menuItems[menu] = item;
    for (const key in menuItems) {
      if (key !== menu) {
        menuItems[key] = null;
      }
    }

    this.selectedMenuItemContabilidad = menuItems['contabilidad'];
    this.selectedMenuItemSistema = menuItems['sistema'];
    this.selectedMenuItemCompras = menuItems['compras'];
    this.selectedMenuItemVentas = menuItems['ventas'];
    this.selectedMenuItemAlmacen = menuItems['almacen'];
  }



}
