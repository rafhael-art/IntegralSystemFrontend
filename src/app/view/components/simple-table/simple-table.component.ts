import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SimpleTable } from './simple-table.interface';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BaseEvent } from '../../common/bases/base-event-interface';
import { fadeInUp400ms } from '../../common/animations/fade-in-up.animation';


@Component({
  selector: 'app-simpletable',
  standalone: true,
  imports: [
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzToolTipModule,
    NzDropDownModule,
    FormsModule,
    CommonModule,

  ],
  animations: [
    fadeInUp400ms
  ],
  templateUrl: './simple-table.component.html'
})
export class SimpletableComponent implements OnInit {

  @Input() IsLoading!: boolean;
  @Input() table!: SimpleTable<any>
  @Output() action: EventEmitter<BaseEvent> = new EventEmitter();
  visible = false;
  listOfDisplayData?: any[];

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    this.listOfDisplayData = [...this.table.data];
  }

  clickAction(data: any, eventName: string) {
    const event: BaseEvent = {
      eventName: eventName,
      data: data
    }
    this.action.emit(event)
  }

}
