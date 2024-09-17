export interface Usuario {
  id: number;
  codigo: string;
  nombreUsuario: string;
  password: string;
  activo: boolean;
  puntoVentaId: number | null;
  descripcionPuntoVenta: string | null;
  direccionPuntoVenta: string | null;
}
