import { endOfYear, startOfYear } from "date-fns";
import { StockAlmacenFechaProducto } from "../../../../../data/almacen/model/stock-almacen-fecha-producto"
import { AutoFiltersWithButton } from "../../../../components/auto-filters-with-button/auto-filters-with-button.interface";
import { ButtonGroup } from "../../../../components/button-group/button-group.interface"
import { SimpleTable } from "../../../../components/simple-table/simple-table.interface"

const table: SimpleTable<StockAlmacenFechaProducto> = {
  cssClass: 'w-10',
  actions: [],
  header: [
    {
      header: 'N° Documento',
      field: 'documento',
      cssClass: 'text-left',
      compare: (a: StockAlmacenFechaProducto, b: StockAlmacenFechaProducto) => a.documento.localeCompare(b.documento),
      type: 'text'
    },
    {
      header: 'Fecha',
      field: 'fechaMovimiento',
      cssClass: 'text-center',
      compare: (a: StockAlmacenFechaProducto, b: StockAlmacenFechaProducto) => a.fechaMovimiento.localeCompare(b.fechaMovimiento),
      type: 'date'
    },
    {
      header: 'Ingreso',
      field: 'ingreso',
      cssClass: 'text-right',
      compare: (a: StockAlmacenFechaProducto, b: StockAlmacenFechaProducto) => a.ingreso - b.ingreso,
      type: 'decimal'
    },
    {
      header: 'Salida',
      field: 'salida',
      cssClass: 'text-right',
      compare: (a: StockAlmacenFechaProducto, b: StockAlmacenFechaProducto) => a.salida - b.salida,
      type: 'decimal'
    },
    {
      header: 'Referencia',
      field: 'referencia',
      cssClass: 'text-left',
      compare: (a: StockAlmacenFechaProducto, b: StockAlmacenFechaProducto) => a.referencia.localeCompare(b.referencia),
      type: 'text'
    },
    {
      header: 'Observaciones',
      field: 'observaciones',
      cssClass: 'text-left',
      compare: (a: StockAlmacenFechaProducto, b: StockAlmacenFechaProducto) => a.observaciones.localeCompare(b.observaciones),
      type: 'text'
    },
  ],
  data: [],
};

const filterOptions: AutoFiltersWithButton = {
  currentFilter: '',
  Inputs: [],
  IsLoading: false,
  ReportButtons: [
    {
      ApiUrl: 'Almacen/StockAlmacenFechaProducto?',
      FileName: 'Stock por almacen a la fecha por producto',
      IsLoading: false,
      ToolTip: 'Exportar lista a excel',
      Action: '&Excel=true',
      Icon: 'file-excel'
    },
    {
      ApiUrl: 'Almacen/StockAlmacenFechaProducto?',
      FileName: 'Stock por almacen a la fecha por producto',
      IsLoading: false,
      ToolTip: 'Imprimir lista',
      Action: '&Print=true',
      Icon: 'printer'
    },
  ]
}




export const componentSettings = {
  table: table,
  filterOptions: filterOptions
}
