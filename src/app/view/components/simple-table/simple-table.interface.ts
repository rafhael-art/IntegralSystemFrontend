export interface SimpleTable<T> {
  header: TableHeader[],
  data: T[],
  actions?: Action[],
  cssClass?: string
}

interface TableHeader {
  header: string;
  field: string;
  compare: any;
  cssClass?: string,
  type: 'text' | 'decimal' | 'integer' | 'date' | 'hour'
}

interface Action {
  tooltip: string,
  icon: string,
  action: string,
  data: any
}

