import { Component } from '@angular/core';

import { TableWithFilterComponent } from '../components/table-with-filter/table-with-filter.component';
import { TableFilterd } from '../components/table-with-filter/table-with-filter.config';

@Component({
  selector: 'app-test-padre',
  standalone: true,
  imports: [
    TableWithFilterComponent
  ],
  templateUrl: './test-padre.component.html',
  styleUrl: './test-padre.component.css'
})
export default class TestPadreComponent {
  table: TableFilterd = {
    columns: [

    ],

    listOfData: [
      { name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
      { name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
      { name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
      { name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' }
    ],
    actions: [
      {
        action: 'Test',
        data: {},
        icon: 'file',
        tooltip: "prueba"
      }
    ],
    actionCssClass: 'w-10',
  }

}
