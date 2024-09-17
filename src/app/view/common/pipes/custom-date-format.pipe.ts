import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaFormato'
})
export class FechaFormatoPipe implements PipeTransform {

  transform(value: any): string {
    if (!value) return ''; // Retorna vacío si el valor es nulo o indefinido

    const fecha = new Date(value);

    // Obtiene el día, mes y año
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // El mes es base cero, por lo que se le suma 1
    const año = fecha.getFullYear();

    // Retorna la fecha formateada en el formato dd/MM/yyyy
    return `${dia}/${mes}/${año}`;
  }

}
