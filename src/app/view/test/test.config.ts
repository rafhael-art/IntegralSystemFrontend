import { NzTableSortFn } from "ng-zorro-antd/table";

export interface TableFilterd {
  listOfData: DataItem[],
  columns: ColumnItem[]
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
}
