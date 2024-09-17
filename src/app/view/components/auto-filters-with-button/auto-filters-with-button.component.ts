import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren, signal } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AutoFiltersWithButton } from './auto-filters-with-button.interface';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { SelectOptionsService } from '../../common/select-options/select-options.service';
import { ButtonGroupComponent } from '../button-group/button-group.component';
import { ButtonGroup } from '../button-group/button-group.interface';
import { BaseEvent } from '../../common/bases/base-event-interface';
import { fadeInRight400ms } from '../../common/animations/fade-in-right.animation';
import { ReportButtonComponent } from '../report-button/report-button.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ColumnItem } from '../table-with-filter/table-with-filter.config';

@Component({
  selector: 'app-auto-filters-with-button',
  standalone: true,
  imports: [
    NzFlexModule,
    NzInputModule,
    NzFormModule,
    NzButtonModule,
    NzIconModule,
    NzDatePickerModule,
    NzSelectModule,
    FormsModule,
    ButtonGroupComponent,
    ReportButtonComponent,
    NzToolTipModule
  ],
  animations: [
    fadeInRight400ms
  ],
  templateUrl: './auto-filters-with-button.component.html',
  styles: [
    `
      nz-date-picker {
        margin: 0 15px 0px 0;
      }
      nz-select {
        width: 200px;
      }
    `
  ]
})
export class AutoFiltersWithButtonComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) currentFilter!: string;
  @Input() inputs!: AutoFiltersWithButton
  @Input() buttonGroup: ButtonGroup[] = [];
  @Input() columnItem: ColumnItem[] = [];
  @Output() formSubmit: EventEmitter<BaseEvent> = new EventEmitter();
  @Output() buttonGroupAction: EventEmitter<BaseEvent> = new EventEmitter();
  @ViewChildren(ReportButtonComponent) excelButtons!: QueryList<ReportButtonComponent>;
  constructor(
    private _selectService: SelectOptionsService
  ) {
  }
  ngAfterViewInit(): void {
    this.loadSelects();

  }
  ngOnInit(): void {

  }

  ejecutarAccionEnHijo(indice: number): void {
    const hijoEspecifico = this.excelButtons.toArray()[indice];
    if (hijoEspecifico) {
      let url = this.currentFilter + this.inputs.ReportButtons[indice].Action;
      hijoEspecifico.download(url.substring(1));
    }
  }

  async loadSelects() {
    await this.inputs.Inputs.filter(x => x.type == 'select').forEach(async input => {
      this._selectService.getSelectOptions(input.apiUrl!).then(
        res => { input.data = res!; }
        , error => { console.log(error) }
      ).catch(ex => console.log(ex))
    });
    this.onFormSubmit()

  }

  onFormSubmit() {
    const event: BaseEvent = {
      eventName: 'Buscar',
      data: this.inputs
    }
    this.formSubmit.emit(event);
  }

  buttonGroupAcction(env: BaseEvent) {
    env.data = this.inputs
    this.buttonGroupAction.emit(env);
  }

  limpiarFiltros() {
    const event: BaseEvent = {
      eventName: 'LimpiarFiltros',
      data: {}
    }
    this.formSubmit.emit(event);
  }

  get showClearFilter(): boolean {
    var col = this.columnItem.find(x => x.searchValue.trim() != '')
    if (col)
      return true;
    return false;
  }
}
