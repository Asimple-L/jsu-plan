import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

/*
* 最近比赛的定义
*/

@Injectable()
export class RecentService {

  constructor() { }
}

export  class Contest {
  constructor(
    public id: string,
    public oj: string,
    public link: string,
    public name: string,
    public start_time: string,
    public week: string,
    public access: string
  ) {
  }
}
