import { Pipe, PipeTransform } from '@angular/core';
/*
  时间转化管道：
    计算传入的时间与现在时间的距离
 */
@Pipe({
  name: 'countDown'
})
export class CountDownPipe implements PipeTransform {

  transform(value: any): any {
    if ( value != null ) {
      const value_date = new Date(value).getTime();
      const now_date = new Date().getTime();
      let sec = ( value_date - now_date ) / 1000;
      let conn = '';
      if ( sec > 0) {
        conn = '还有';
      } else {
        conn = '已过去';
        sec *= -1;
      }
      const day = sec / 24 / 3600;
      const h = sec / 3600 % 24;
      if ( Math.floor(day) >= 0 ) { conn = conn + Math.floor(day) + '天'; }
      if ( Math.floor(h) >= 0 ) { conn = conn + Math.floor(h) + '小时'; }
      return conn;
    }
    return '0days';
  }

}
