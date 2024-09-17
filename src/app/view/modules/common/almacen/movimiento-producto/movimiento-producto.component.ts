import { Component, Input, inject, OnInit, OnDestroy } from '@angular/core';
import { SimpletableComponent } from '../../../../components/simple-table/simple-table.component';
import { componentSettings } from './movimiento-producto.config';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { StockAlmacenFecha } from '../../../../../data/almacen/model/stock-almacen-fecha';
import { AlmacenService } from '../../../../../data/almacen/service/almacen.service';
import { AutoFiltersWithButtonComponent } from '../../../../components/auto-filters-with-button/auto-filters-with-button.component';


@Component({
  selector: 'app-movimiento-producto',
  standalone: true,
  imports: [
    SimpletableComponent,
    NzDividerModule,
    AutoFiltersWithButtonComponent
  ],
  templateUrl: './movimiento-producto.component.html'
})
export class MovimientoProductoComponent implements OnInit, OnDestroy {

  component
  public IsLoading: boolean = false;
  @Input() selectData?: StockAlmacenFecha;
  @Input() filter?: string;

  private _almacenService = inject(AlmacenService);
  constructor() {
    this.component = componentSettings
  }
  ngOnDestroy(): void {
    this.component.table.data = [];
  }
  ngOnInit(): void {
    this.component.filterOptions.currentFilter = this.filter! + `&NombreProducto=${this.selectData?.nombreLargoProducto}&Producto=${this.selectData?.idProducto}`;
    this.Buscar();
  }

  Buscar() {
    this.IsLoading = true;
    const filter = `${this.component.filterOptions.currentFilter}`
    this._almacenService.StockAlmacenFechaProducto(filter)
      .subscribe((res => {
        this.component.table.data = res.data!;
        this.IsLoading = false;
      }))
  }
}
