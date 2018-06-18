import { Pipe, PipeTransform } from '@angular/core';

/*
  日期转换的管道：
    将星期的英语缩写转化成中文
 */
@Pipe({
  name: 'week'
})
export class WeekPipe implements PipeTransform {
  transform(value: any): any {
    const week_y = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const week_c = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
    let ind = 0;
    for ( const w of week_y) {
      if ( value.toLowerCase() == w ) {
        return week_c[ind];
      }
      ind = ind + 1;
    }
  }

}
