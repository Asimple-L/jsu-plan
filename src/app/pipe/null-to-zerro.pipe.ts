import { Pipe, PipeTransform } from '@angular/core';
/*
  将null转化成0的管道
 */
@Pipe({
  name: 'nullToZerro'
})
export class NullToZerroPipe implements PipeTransform {

  transform(value: any): any {
    if ( value == null ) {
      return 0;
    } else {
      return value;
    }
  }

}
