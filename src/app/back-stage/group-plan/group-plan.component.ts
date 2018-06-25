import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Plan} from '../../service/plans.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-group-plan',
  templateUrl: './group-plan.component.html',
  styleUrls: ['./group-plan.component.scss']
})
export class GroupPlanComponent implements OnInit {

  dataSource: Observable<any>;
  gid: string;
  plans: Plan[];
  loading: boolean;
  isVisible: boolean;
  isOkLoading: boolean;
  unPlans: Plan[];
  listOfSelectedValue = [];

  constructor(
    private routes: ActivatedRoute,
    private http: HttpClient,
    private message: NzMessageService,
  ) {
    this.gid = this.routes.snapshot.params['gid'];
  }

  ngOnInit() {
    this.init();
    this.http_get();
  }

  // 初始化
  init(): void {
    this.loading = true;
    this.isVisible = false;
    this.isOkLoading = false;
    this.listOfSelectedValue = [];
  }

  // 获取组所有计划
  http_get(): void {
    this.dataSource = this.http.get('/search/gplan', { params: {'gid': this.gid }});
    this.dataSource.subscribe( ( data) => {
      this.plans = data;
      this.loading = false;
    });
  }

  // 取消添加注册
  handleCancel(): void {
    this.isVisible = false;
    this.listOfSelectedValue = [];
  }

  // 提交注册请求
  handleOk(): void {
    this.isOkLoading = true;
    this.http.post('/search/addgplan', JSON.stringify({ 'gid': this.gid, 'pid': this.listOfSelectedValue })).subscribe( (data) => {
      if ( data == 0 ) {
        this.message.error('注册失败...');
      } else {
        this.message.success('注册成功...');
      }
      this.init();
      this.http_get();
    });
  }

  // 取消注册
  confirm(key: string): void {
    this.dataSource = this.http.get('/search/delgplan', { params: {'gid': this.gid, 'pid': key}});
    this.dataSource.subscribe( (data) => {
      if ( data == 0 ) {
        this.message.error('取消注册失败...');
      } else {
        this.message.success('取消注册成功...');
      }
      this.http_get();
    });
  }

  // 显示添加对话框
  showModal(): void {
    this.dataSource = this.http.get('/search/gnplan', { params: {'gid': this.gid }});
    this.dataSource.subscribe( (data) => {
      this.unPlans = data;
      this.isVisible = true;
    });
  }

}
