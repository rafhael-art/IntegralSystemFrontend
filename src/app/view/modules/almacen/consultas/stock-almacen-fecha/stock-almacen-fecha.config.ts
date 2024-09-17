import { AutoFiltersWithButton } from "../../../../components/auto-filters-with-button/auto-filters-with-button.interface";
import { ButtonGroup } from '../../../../components/button-group/button-group.interface';
import { endOfYear } from "date-fns";
import { TableFilterd } from "../../../../components/table-with-filter/table-with-filter.config";

const filterOptions: AutoFiltersWithButton = {
  currentFilter: '',
  Inputs: [
    {
      value: '118',
      label: 'Almacen',
      type: 'select',
      name: 'Almacen',
      placeHolder: '',
      ennableClear: false,
      cssClass: 'w-42 mr-4',
      apiUrl: 'Almacen/AlmacenSelect',
      data: []
    },
    {
      value: endOfYear(new Date()),
      label: 'Hasta',
      type: 'date',
      name: 'Hasta',
      placeHolder: '',
      ennableClear: false,
      cssClass: '',
      data: []
    },
  ],
  IsLoading: false,
  ReportButtons: [
    {
      ApiUrl: 'Almacen/StockAlmacenFecha?',
      FileName: 'Stock por almacen a la fecha',
      IsLoading: false,
      ToolTip: 'Exportar lista a excel',
      Action: '&Excel=true',
      Icon: 'file-excel'
    },
    {
      ApiUrl: 'Almacen/StockAlmacenFecha?',
      FileName: 'Stock por almacen a la fecha',
      IsLoading: false,
      ToolTip: 'Imprimir lista',
      Action: '&Print=true',
      Icon: 'printer'
    },
  ]
}

const table: TableFilterd = {
  actionCssClass: 'w-10',
  actions: [
    {
      action: 'verMovimientos',
      icon: 'diff',
      tooltip: 'Ver Movimientos',
      data: {}
    }
  ],
  columns: [
    {
      name: 'Nombre Almacén',
      key: 'nombreAlmacen',
      cssClassAlign: 'text-left',
      sortFn: (a, b) => a["nombreAlmacen"].localeCompare(b["nombreAlmacen"]),
      type: 'text',
      filterVisible: false,
      sortOrder: null,
      searchValue: '',
      cssClassWidth: ''
    },
    {
      name: 'Código Producto',
      key: 'codigoProducto',
      cssClassAlign: 'text-left',
      sortFn: (a, b) => a["codigoProducto"].localeCompare(b["codigoProducto"]),
      type: 'text',
      filterVisible: false,
      sortOrder: null,
      searchValue: '',
      cssClassWidth: ''
    },
    {
      name: 'Descripción Producto',
      key: 'nombreLargoProducto',
      cssClassAlign: 'text-left',
      sortFn: (a, b) => a["nombreLargoProducto"].localeCompare(b["nombreLargoProducto"]),
      type: 'text',
      filterVisible: false,
      sortOrder: null,
      searchValue: '',
      cssClassWidth: ''
    },
    {
      name: 'Stock',
      key: 'stockProducto',
      cssClassAlign: 'text-right',
      sortFn: (a, b) => a["stockProducto"] - b["stockProducto"],
      type: 'decimal',
      filterVisible: false,
      sortOrder: null,
      searchValue: '',
      cssClassWidth: ''
    },
    {
      name: 'Unidad Medida',
      key: 'nombreUnidadMedida',
      cssClassAlign: 'text-center',
      sortFn: (a, b) => a["nombreUnidadMedida"].localeCompare(b["nombreUnidadMedida"]),
      type: 'text',
      filterVisible: false,
      sortOrder: null,
      searchValue: '',
      cssClassWidth: ''
    },
  ],
  listOfData: [],
}



const buttonGroup: ButtonGroup[] = []

export const componentSettings = {
  filterOptions: filterOptions,
  table: table,
  buttonGroup: buttonGroup
}
