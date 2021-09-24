import { Pipe, PipeTransform } from '@angular/core';
import { Espanol } from 'src/app/espanol/model/espanol';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(lista: any[], texto: string): any[] {
    if(!texto){
      return lista
    }
    return lista.filter(p => p.palabra.toUpperCase().includes(texto.toUpperCase()))
  }

}
