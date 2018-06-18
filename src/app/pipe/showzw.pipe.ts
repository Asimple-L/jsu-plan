import { Pipe, PipeTransform } from '@angular/core';
/*
  将空转化成字符串'暂无'的管道
 */
@Pipe({
  name: 'showzw'
})
export class ShowzwPipe implements PipeTransform {

  transform(value: any): any {
    if ( value == '' || value.trim() == '' ) {
      return '暂无';
    } else {
      return value;
    }
  }

}
