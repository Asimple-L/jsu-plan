import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';
import {UserGroup} from '../../service/group.service';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss']
})
export class UserGroupComponent implements OnInit {

  loading = true;
  userGroups: UserGroup[];
  dataSource: Observable<any>;
  isVisible: boolean;
  title: string;
  isOkLoading: boolean;
  isShowUser: boolean;
  isUserLoading: boolean;
  editCache = {};

  constructor(
    private http: HttpClient,
    private message: NzMessageService,
  ) { }

  ngOnInit() {
    this.init();
    this.http_get();
  }

  // 删除用户组
  confirm(key: string): void {
    this.http.get('/search/delgroup', { params: {'gid': key}}).subscribe();
    this.http_get();
  }

  // 获取所有用户组
  http_get(): void {
    this.loading = true;
    this.dataSource = this.http.get('/search/allgroup');
    this.dataSource.subscribe( (data) => {
      this.userGroups = data;
      this.loading = false;
      this.updateEditCache();
    });
  }

  // 取消创建用户组对话框
  handleCancel(): void {
    this.isVisible = false;
    this.title = '';
  }

  // 初始化信息
  init(): void {
    this.isVisible = false;
    this.isOkLoading = false;
    this.isShowUser = false;
    this.isUserLoading = false;
    this.loading = true;
    this.title = '';
  }

  // 提交创建用户组请求
  handleOk(): void {
    this.isOkLoading = true;
    if ( this.title == null || this.title.trim() == '' ) {
      this.isOkLoading = false;
      return ;
    }
    this.isOkLoading = false;
    this.dataSource = this.http.get('/search/addgroup', { params: {'title': this.title }});
    this.dataSource.subscribe( (data) => {
      if ( data == 0 ) {
        this.message.error('用户组创建失败');
      } else {
        this.message.success('用户组创建成功');
      }
      this.init();
      this.http_get();
    });
  }

  // 显示创建用户组对话框
  showModal(): void {
    this.isVisible = true;
  }

  // 开始编辑
  startEdit(key: string): void {
    this.editCache[ key ].edit = true;
  }

  // 取消编辑
  CanceEdit(key: string): void {
    this.editCache[ key ].edit = false;
    this.updateEditCache();
  }

  // 提交修改
  finishEdit(key: string, title: string): void {
    this.editCache[ key ].edit = false;
    this.http.get('/search/updategroup', { params: {'gname': title, 'gid': key }}).subscribe( (data) => {
      if ( data == 0 ) {
        this.message.error('修改失败...');
      } else {
        this.message.success('修改成功');
      }
    });
    this.http_get();
  }

  // 取消修改计划名称
  updateEditCache(): void {
    this.userGroups.forEach(item => {
      if (!this.editCache[ item.id ]) {
        this.editCache[ item.id ] = {
          edit: false,
          name: item.name
        };
      }
    });
  }

}
