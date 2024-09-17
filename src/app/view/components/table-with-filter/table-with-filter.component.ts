import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CommonModule } from '@angular/common';
import { ColumnItem, DataItem, TableFilterd } from './table-with-filter.config';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { BaseEvent } from '../../common/bases/base-event-interface';
import { fadeInUp400ms } from '../../common/animations/fade-in-up.animation';
import { Subscription } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-table-with-filter',
  standalone: true,
  imports: [
    NzTableModule,
    NzDropDownModule,
    NzIconModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    CommonModule,
    NzToolTipModule
  ],
  animations: [
    fadeInUp400ms
  ],
  templateUrl: './table-with-filter.component.html',
  styleUrl: './table-with-filter.component.css'
})
export class TableWithFilterComponent implements OnDestroy {
  @Input() table!: TableFilterd;
  listOfDisplayData: DataItem[] = [];
  @Output() action: EventEmitter<BaseEvent> = new EventEmitter();
  @Input() IsLoading!: boolean;
  private breakpointSubscription!: Subscription;
  isScrolled = false;
  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.setData();
    this.breakpointSubscription = this.breakpointObserver
      .observe(['(max-width: 564px)'])
      .subscribe((state: BreakpointState) => {
        this.isScrolled = state.matches;
      });
  }
  ngOnDestroy() {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }

  setData() {
    this.listOfDisplayData = [...this.table.listOfData];
  }

  reset(column: ColumnItem): void {
    column.searchValue = '';
    this.search();
  }

  clickAction(data: any, eventName: string) {
    const event: BaseEvent = {
      eventName: eventName,
      data: data
    }
    this.action.emit(event)
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
