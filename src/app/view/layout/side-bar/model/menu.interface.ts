export interface Menu {
  id: number;
  nombre: string;
  idPadre: number | null;
  url: string | null;
  icono: string | null
}
