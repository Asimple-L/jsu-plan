import { Component, OnInit } from '@angular/core';
import {Plan, PlansService} from '../service/plans.service';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {User, UserPlan, UserService} from '../service/user.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public plans: Plan[];
  private dataSource: Observable<any>;
  isLoading = true;
  user = null;
  userPlan: UserPlan[];

  constructor(
    private planService: PlansService,
    private http: HttpClient,
    private userService: UserService
    ) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
    /*
      每3秒检测是否有用户登录，检测到用户登录时停止检测
     */
    const t = setInterval(() => {
      this.user = this.userService.getUser();
      // 如果检测到用户登录，停止发送请求
      if ( this.user != null ) {
        this.get_userPlan();
        clearInterval(t);
      }
    } , 3000);
    this.http_get();
  }

  // 检测是否有用户登录
  check(): boolean {
    if ( this.user != null  ) {
      return true;
    }
    return false;
  }

  // 用户确认注册
  confirm(key: string): void {
    this.http.get('/search/cregist', { params: { 'planid': key, 'sno': this.user.sno }}).subscribe();
    this.http_get();
    if ( this.user != null ) {
      this.get_userPlan();
    }
  }

  // 检测用户是否已经注册过计划
  reg(key: string): boolean {
    if ( this.userPlan == null ) {
      return false;
    }
    for ( const item of this.userPlan ) {
      if ( item.id == key && item.status == 1 ) {
        return true;
      }
    }
    return false;
  }

  // 从服务端获取当前所有计划信息
  http_get(): void {
    this.dataSource = this.http.get('/search/allplan');
    this.dataSource.subscribe((data) => {
      this.plans = data;
      this.isLoading = false;
    });
  }

  // 从后端获取当前用户所有注册的计划
  get_userPlan(): void {
    this.dataSource = this.http.get('/search/userplan', { params: {'sno': this.user.sno }} );
    this.dataSource.subscribe( ( data ) => {
      this.userPlan = data;
    });
  }

}
