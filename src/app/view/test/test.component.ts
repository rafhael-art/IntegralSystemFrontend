import { Component, Input, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CommonModule } from '@angular/common';
import { ColumnItem, DataItem, TableFilterd } from './test.config';



@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    NzTableModule,
    NzDropDownModule,
    NzIconModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    CommonModule
  ],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export default class TestComponent implements OnInit {
  @Input() table!: TableFilterd;
  listOfDisplayData: DataItem[] = [];

  ngOnInit() {
    this.listOfDisplayData = [...this.table.listOfData];
  }

  reset(column: ColumnItem): void {
    column.searchValue = '';
    this.search();
  }

  search(): void {
    this.listOfDisplayData = this.table.listOfData.filter((item: DataItem) => {
      return this.table.columns.every((col) => {
        col.filterVisible = false;
        if (col.searchValue) {

          return item[col.key]?.toString().toLowerCase().includes(col.searchValue.toLowerCase());
        }
        return true;
      });
    });
  }

  sort(): void {
    this.listOfDisplayData = this.listOfDisplayData.sort((a, b) => {
      for (const column of this.table.columns) {
        if (column.sortOrder) {
          const result = column.sortFn?.(a, b) ?? 0;
          if (result !== 0) {
            return column.sortOrder === 'ascend' ? result : -result;
          }
        }
      }
      return 0;
    });
  }

  sortColumn(column: ColumnItem, order: string | null): void {
    column.sortOrder = order;
    this.table.columns.forEach(col => {
      if (col !== column) {
        col.sortOrder = null;
      }
    });
    this.sort();
  }
}
