import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ButtonGroup } from './button-group.interface';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { BaseEvent } from '../../common/bases/base-event-interface';


@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [
    NzButtonModule,
    NzIconModule,
    NzToolTipModule
  ],
  template: `
  <nz-button-group>
  @for (item of buttons; track $index) {
  <button [nzLoading]="item.isLoading" [nzSize]="'small'" nz-button nzType="primary" (click)="emit(item.action)" nz-tooltip
    nzTooltipTitle="{{item.tooltip}}" nzTooltipPlacement="bottom" [nzTooltipColor]="'blue'">
    <span nz-icon nzType="{{item.icon}}"></span>
    {{item.text}}
  </button>
  }

</nz-button-group>
  `
})
export class ButtonGroupComponent {
  @Input() buttons: ButtonGroup[] = [];
  @Output() action: EventEmitter<BaseEvent> = new EventEmitter();

  emit(action: string) {
    const event: BaseEvent = {
      eventName: action
    }
    this.action.emit(event)
  }
}
