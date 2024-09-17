import { NzTableSortFn } from "ng-zorro-antd/table";

export interface TableFilterd {
  listOfData: DataItem[],
  columns: ColumnItem[],
  actions?: TableAction[],
  actionCssClass?: string
}

export interface DataItem {
  [key: string]: any;
}

export interface ColumnItem {
  name: string;
  filterVisible: boolean;
  searchValue: string;
  key: string;
  sortOrder: string | null;
  sortFn?: NzTableSortFn<DataItem>;
  type: 'text' | 'decimal' | 'integer' | 'date' | 'hour',
  cssClassAlign: string,
  cssClassWidth: string
}

interface TableAction {
  tooltip: string,
  icon: string,
  action: string,
  data: any
}
