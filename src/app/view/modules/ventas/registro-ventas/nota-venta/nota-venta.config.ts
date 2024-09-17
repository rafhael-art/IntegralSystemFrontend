import { AutoFiltersWithButton } from "../../../../components/auto-filters-with-button/auto-filters-with-button.interface";
import { ButtonGroup } from '../../../../components/button-group/button-group.interface';
import { TableFilterd } from "../../../../components/table-with-filter/table-with-filter.config";

const filterOptions: AutoFiltersWithButton = {
  currentFilter: '',
  Inputs: [
  ],
  IsLoading: false,
  ReportButtons: [
    {
      ApiUrl: 'Venta/NotaVenta?',
      FileName: 'Nota de Venta',
      IsLoading: false,
      ToolTip: 'Exportar lista a excel',
      Action: '&Excel=true',
      Icon: 'file-excel'
    },
    {
      ApiUrl: 'Venta/NotaVenta?',
      FileName: 'Nota de Venta',
      IsLoading: false,
      ToolTip: 'Imprimir lista',
      Action: '&Print=true',
      Icon: 'printer'
    },
  ]
}

const table: TableFilterd = {
  actionCssClass: 'w-[5rem]',
  actions: [
    {
      action: 'Modificar',
      icon: 'edit',
      tooltip: 'Modificar',
      data: {}
    },
    {
      action: 'Eliminar',
      icon: 'delete',
      tooltip: 'Eliminar',
      data: {}
    },
    {
      action: 'Imprimir',
      icon: 'printer',
      tooltip: 'Imprimir',
      data: {}
    }
  ],
  columns: [
    {
      name: 'Número',
      key: 'numero',
      cssClassAlign: 'text-center',
      sortFn: (a, b) => a["numero"].localeCompare(b["numero"]),
      type: 'text',
      filterVisible: false,
      sortOrder: null,
      searchValue: '',
      cssClassWidth: ''
    },
    {
      name: 'Fecha',
      key: 'fecha',
      cssClassAlign: 'text-center',
      sortFn: (a, b) => a["fecha"].localeCompare(b["fecha"]),
      type: 'date',
      filterVisible: false,
      sortOrder: null,
      searchValue: '',
      cssClassWidth: ''
    },
    {
      name: 'Cliente',
      key: 'nombreCliente',
      cssClassAlign: 'text-left',
      sortFn: (a, b) => a["nombreCliente"].localeCompare(b["nombreCliente"]),
      type: 'text',
      filterVisible: false,
      sortOrder: null,
      searchValue: '',
      cssClassWidth: ''
    },
    {
      name: 'Moneda',
      key: 'moneda',
      cssClassAlign: 'text-center',
      sortFn: (a, b) => a["moneda"].localeCompare(b["moneda"]),
      type: 'text',
      filterVisible: false,
      sortOrder: null,
      searchValue: '',
      cssClassWidth: ''
    },
    {
      name: 'M. Neto',
      key: 'montoNeto',
      cssClassAlign: 'text-right',
      sortFn: (a, b) => a["montoNeto"] - b["montoNeto"],
      type: 'decimal',
      filterVisible: false,
      sortOrder: null,
      searchValue: '',
      cssClassWidth: ''
    },
    {
      name: 'M. IGV',
      key: 'montoIgv',
      cssClassAlign: 'text-right',
      sortFn: (a, b) => a["montoIgv"] - b["montoIgv"],
      type: 'decimal',
      filterVisible: false,
      sortOrder: null,
      searchValue: '',
      cssClassWidth: ''
    },
    {
      name: 'M. Total',
      key: 'montoTotal',
      cssClassAlign: 'text-right',
      sortFn: (a, b) => a["montoTotal"] - b["montoTotal"],
      type: 'decimal',
      filterVisible: false,
      sortOrder: null,
      searchValue: '',
      cssClassWidth: ''
    },
    {
      name: 'Tipo Cliente',
      key: 'tipoCliente',
      cssClassAlign: 'text-center',
      sortFn: (a, b) => a["tipoCliente"].localeCompare(b["tipoCliente"]),
      type: 'text',
      filterVisible: false,
      sortOrder: null,
      searchValue: '',
      cssClassWidth: ''
    },
    {
      name: 'Situación',
      key: 'situacion',
      cssClassAlign: 'text-center',
      sortFn: (a, b) => a["situacion"].localeCompare(b["situacion"]),
      type: 'text',
      filterVisible: false,
      sortOrder: null,
      searchValue: '',
      cssClassWidth: ''
    },
  ],
  listOfData: [],
}

const buttonGroup: ButtonGroup[] = [
  {
    action: "Nuevo",
    icon: "file-add",
    isLoading: false,
    tooltip: "Nueva Nota de Venta",
    text: "Nueva Nota de Venta"
  }
]

export const componentSettings = {
  filterOptions: filterOptions,
  table: table,
  buttonGroup: buttonGroup
}
