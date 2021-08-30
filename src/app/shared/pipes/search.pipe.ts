import { Pipe, PipeTransform } from '@angular/core';
import { Espanol } from 'src/app/espanol/model/espanol';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(lista: any[], texto: string): any[] {
    if(!texto){
      //console.log("imprimo lista")
      return lista
    }
    //console.log(lista)
    //console.log("holass")
    //console.log(lista.filter(item => item.palabra == texto))
    return lista.filter(p => p.palabra.toUpperCase().includes(texto.toUpperCase()))
  }

}
