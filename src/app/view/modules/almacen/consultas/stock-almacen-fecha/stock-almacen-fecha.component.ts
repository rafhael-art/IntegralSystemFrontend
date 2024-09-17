import { Component, ViewChild, inject } from '@angular/core';
import { AutoFiltersWithButtonComponent } from '../../../../components/auto-filters-with-button/auto-filters-with-button.component';
import { componentSettings } from './stock-almacen-fecha.config';
import { BaseEvent } from '../../../../common/bases/base-event-interface';
import * as EventNames from '../../../../common/static/event-names';
import { GetInput } from '../../../../common/functions/get-inputs';
import { AlmacenService } from '../../../../../data/almacen/service/almacen.service';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { MovimientoProductoComponent } from '../../../common/almacen/movimiento-producto/movimiento-producto.component';
import { StockAlmacenFecha } from '../../../../../data/almacen/model/stock-almacen-fecha';
import { AuthService } from '../../../../auth/service/auth.service';
import { TableWithFilterComponent } from '../../../../components/table-with-filter/table-with-filter.component';


@Component({
  selector: 'app-stock-almacen-fecha',
  standalone: true,
  imports: [
    NzModalModule,
    TableWithFilterComponent,
    AutoFiltersWithButtonComponent,
    MovimientoProductoComponent
  ],
  templateUrl: './stock-almacen-fecha.component.html'
})
export default class StockAlmacenFechaComponent {
  component
  @ViewChild(TableWithFilterComponent) tableWithFilterComponent!: TableWithFilterComponent;
  public isVisible = false;
  public selectData?: StockAlmacenFecha;
  _almacenService = inject(AlmacenService);
  _authService = inject(AuthService);
  constructor() {
    this.component = componentSettings;
  }

  clickEvent(env: BaseEvent) {
    switch (env.eventName) {
      case EventNames.Buscar:
        this.component.filterOptions.IsLoading = true;
        this.buscar(GetInput(env.data));
        break;
      case EventNames.verMovimientos:
        this.showModal(env.data);
        break;
      case EventNames.LimpiarFiltros:
        this.limpiarFiltrosTabla();
        break;
    }
  }

  limpiarFiltrosTabla() {
    this.component.table.columns.map(x => {
      x.searchValue = '';
      this.tableWithFilterComponent.reset(x);
    });
  }


  buscar(filter: string) {
    filter += `&Desde=${this._authService.fechaInicialEjercicio('MM-dd-yyyy')}`
    this.component.filterOptions.currentFilter = filter;
    this._almacenService.StockAlmacenFecha(filter)
      .subscribe((res) => {
        this.component.table.listOfData = res.data!;
        this.component.filterOptions.IsLoading = false;
        this.tableWithFilterComponent.setData();
      })
  }


  showModal(data: StockAlmacenFecha): void {
    this.selectData = data
    this.isVisible = true;

  }



}
