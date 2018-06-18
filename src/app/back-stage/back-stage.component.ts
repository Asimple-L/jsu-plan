import { Component, OnInit } from '@angular/core';
import {Plan, PlansService} from '../service/plans.service';
import {User, UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-back-stage',
  templateUrl: './back-stage.component.html',
  styleUrls: ['./back-stage.component.scss']
})
export class BackStageComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;
  public plans: Plan[];
  private user: User;
  title: string;
  loading = true;
  dataSource: Observable<any>;
  editCache = {};

  constructor(
    private planService: PlansService,
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.some_user();
    // 不断检测管理员是否是登录状态
    setInterval(() => {
      this.some_user();
    } , 3000);
    this.http_get();
  }

  // 获取当前登录的用户并检测是否是管理员
  some_user(): void {
    this.user = this.userService.getUser();
    if ( this.user == null || this.user.status != 1 ) {
      this.router.navigateByUrl('/');
    }
  }

  // 显示创建计划对话框
  showModal(): void {
    this.isVisible = true;
  }

  // 提交创建计划
  handleOk(): void {
    // 传输给后台，让后台创建题集
    this.dataSource = this.http.get('/search/addplan', { params: {'title': this.title, 'name': this.user.sname }});
    this.dataSource.subscribe();
    // 提交后重新初始化以及获取所有计划信息
    this.title = null;
    this.http_get();
    this.isVisible = false;
    this.isOkLoading = false;
  }

  // 取消创建计划
  handleCancel() {
    this.isVisible = false;
  }

  // 删除计划
  confirm(id: string): void {
    // 删除题集从新接收计划表
    this.http.get('/search/delplan', { params: {'pid': id}}).subscribe();
    this.http_get();
  }

  // 获取所有计划信息
  http_get(): void {
    this.loading = true;
    this.dataSource = this.http.get('/search/allplan');
    this.dataSource.subscribe( (data) => {
      this.plans = data;
      this.updateEditCache();
      this.loading = false;
    });
  }

  // 开始编辑
  startEdit(key: number): void {
    this.editCache[ key ].edit = true;
  }

  //  修改计划名称
  finishEdit(key: string, title: string): void {
    this.editCache[ key ].edit = false;
    this.dataSource = this.http.get('/search/updateplan', { params: {'title': title, 'pid': key }});
    this.dataSource.subscribe();
    this.http_get();
  }
  CanceEdit(key: number): void {
    this.editCache[ key ].edit = false;
    this.updateEditCache();
  }

  // 取消修改计划名称
  updateEditCache(): void {
    this.plans.forEach(item => {
      if (!this.editCache[ item.id ]) {
        this.editCache[ item.id ] = {
          edit: false,
          name: item.name
        };
      }
    });
  }

  // 跳转到用户管理
  trunToUser(): void {
    this.router.navigateByUrl('/back_user');
  }

}
