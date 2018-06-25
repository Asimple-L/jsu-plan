import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../service/user.service';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-group-user',
  templateUrl: './group-user.component.html',
  styleUrls: ['./group-user.component.scss']
})
export class GroupUserComponent implements OnInit {

  gid: string;
  users: User[];
  dataSource: Observable<any>;
  loading = false;
  isVisible = false;
  notGroupUser: User[];
  isOkLoading = false;
  listOfSelectedValue = [];

  constructor(
    private routers: ActivatedRoute,
    private http: HttpClient,
    private message: NzMessageService,
  ) {
    this.gid = this.routers.snapshot.params['gid'];
  }

  ngOnInit() {
    this.init();
    this.http_get();
  }

  // 获取到组内所有的用户
  http_get(): void {
    this.loading = true;
    this.dataSource = this.http.get('/search/guser', { params: {'gid': this.gid }});
    this.dataSource.subscribe( (data) => {
      // console.log(data);
      this.users = data;
      this.loading = false;
    });
  }

  // 初始化信息
  init(): void {
    this.loading = false;
    this.isVisible = false;
    this.isOkLoading = false;
    this.listOfSelectedValue = [];
  }

  // 显示添加用户对话框
  showModal(): void {
    // 请求得到所有不属于这个组的用户
    this.dataSource = this.http.get('/search/gnuser', { params: { 'gid': this.gid }});
    this.dataSource.subscribe( (data) => {
      this.notGroupUser = data;
      this.isVisible = true;
    });
  }

  // 取消
  handleCancel(): void {
    this.isVisible = false;
    this.listOfSelectedValue = [];
  }

  // 提交添加用户到用户组
  handleOk(): void {
    this.isOkLoading = true;
    if ( this.listOfSelectedValue.length == 0 ) {
      this.message.error('无添加用户...');
      return ;
    }
    this.http.post('/search/addguser', JSON.stringify({'gid': this.gid, 'sno': this.listOfSelectedValue })).subscribe();
    this.init();
    this.http_get();
  }

  // 从用户组中删除用户
  confirm(key: string): void {
    this.dataSource = this.http.get('/search/delguser', { params: {'sno': key, 'gid': this.gid }});
    this.dataSource.subscribe( (data) => {
      if ( data == 0 ) {
        this.message.error('删除失败');
      } else {
        this.message.success('删除成功！！');
      }
      this.http_get();
    });
  }

}
