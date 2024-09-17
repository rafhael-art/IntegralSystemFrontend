import { SelectOption } from "../../common/select-options/select-options.interface"
import { ReportButton } from "../report-button/report-button.interface"

export interface AutoFiltersWithButton {
  Inputs: Input[],
  IsLoading: boolean,
  ReportButtons: ReportButton[],
  currentFilter: string
}

export interface Input {
  type: 'text' | 'number' | 'decimal' | 'date' | 'hour' | 'select',
  label: string,
  value: any,
  name: string,
  placeHolder: string,
  ennableClear: boolean,
  cssClass: string,
  apiUrl?: string,
  data: SelectOption[]
}



