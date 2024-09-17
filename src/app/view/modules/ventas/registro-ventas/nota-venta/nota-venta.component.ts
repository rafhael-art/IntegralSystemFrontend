import { Component, ViewChild, inject } from '@angular/core';
import { TableWithFilterComponent } from '../../../../components/table-with-filter/table-with-filter.component';
import { AutoFiltersWithButtonComponent } from '../../../../components/auto-filters-with-button/auto-filters-with-button.component';
import { componentSettings } from './nota-venta.config';
import * as EventNames from '../../../../common/static/event-names';
import { BaseEvent } from '../../../../common/bases/base-event-interface';
import { GetInput } from '../../../../common/functions/get-inputs';
import { AuthService } from '../../../../auth/service/auth.service';
import { VentaService } from '../../../../../data/venta/service/venta.service';
@Component({
  selector: 'app-nota-venta',
  standalone: true,
  imports: [
    TableWithFilterComponent,
    AutoFiltersWithButtonComponent
  ],
  templateUrl: './nota-venta.component.html'
})
export default class NotaVentaComponent {

  component
  _authService = inject(AuthService);
  _VentaService = inject(VentaService);
  @ViewChild(TableWithFilterComponent) tableWithFilterComponent!: TableWithFilterComponent;
  constructor() {
    this.component = componentSettings;
  }

  clickEvent(env: BaseEvent) {
    switch (env.eventName) {
      case EventNames.Buscar:
        this.component.filterOptions.IsLoading = true;
        this.buscar(GetInput(env.data));
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
    filter += `?Anio=${this._authService.anioEjercicio}`
    this.component.filterOptions.currentFilter = filter;
    this._VentaService.NotaVentaGetAll(filter)
      .subscribe((res) => {
        this.component.table.listOfData = res.data!;
        this.component.filterOptions.IsLoading = false;
        this.tableWithFilterComponent.setData();
      })
  }

}
