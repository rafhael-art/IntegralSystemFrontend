import { Component } from '@angular/core';
import { SimpletableComponent } from '../../../../components/simpletable/simpletable.component';
import { AutoFiltersWithButtonComponent } from '../../../../components/auto-filters-with-button/auto-filters-with-button.component';

@Component({
  selector: 'app-stock-almacen-fecha',
  standalone: true,
  imports: [
    SimpletableComponent,
    AutoFiltersWithButtonComponent
  ],
  templateUrl: './stock-almacen-fecha.component.html'
})
export default class StockAlmacenFechaComponent {

}
