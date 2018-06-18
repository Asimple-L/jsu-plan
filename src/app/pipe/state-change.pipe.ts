import { Pipe, PipeTransform } from '@angular/core';
/*
   检测题目是否被AC
 */
@Pipe({
  name: 'stateChange'
})
export class StateChangePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if ( value == 0 ) {
      return null;
    } else if ( value == 1 ) {
      return 'solved';
    } else if ( value == 2 ) {
      return 'attempted';
    } else {
      return null;
    }
  }

}
