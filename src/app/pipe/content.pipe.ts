import { Pipe, PipeTransform } from '@angular/core';
/*
  题目链接管道：
    传入链接id生成VJ题目链接
 */
@Pipe({
  name: 'content'
})
export class ContentPipe implements PipeTransform {

  transform(value: any): any {
    return 'https://cn.vjudge.net/contest/' + value;
  }

}
