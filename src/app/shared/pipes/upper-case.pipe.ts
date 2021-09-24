import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase'
})
export class UpperCasePipe implements PipeTransform {

  transform(value: string): any {
    if(!value) return ""
    return value.toUpperCase();
  }

}
