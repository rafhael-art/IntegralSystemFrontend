export interface NovaVentaGetAllDto {
  id: number;
  numero: string;
  fecha: string;
  nombreCliente: string;
  moneda: string;
  montoNeto: number;
  montoIgv: number;
  montoTotal: number;
  tipoCliente: string;
  situacion: string;
}
