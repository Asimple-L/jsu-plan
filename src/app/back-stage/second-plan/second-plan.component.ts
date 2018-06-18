import { Component, OnInit } from '@angular/core';
import {Plan, PlansService, Special} from '../../service/plans.service';
import {ActivatedRoute} from '@angular/router';
import {PlansViewService} from '../../service/plans-view.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-second-plan',
  templateUrl: './second-plan.component.html',
  styleUrls: ['./second-plan.component.scss']
})
export class SecondPlanComponent implements OnInit {

  specials: Special[];
  isVisible = false;
  isOkLoading = false;
  loading = true;
  title: string;
  id: string;
  dataSource: Observable<any>;
  editCache = {};

  constructor(
    private plansViewService: PlansViewService,
    private router: ActivatedRoute,
    private http: HttpClient
  ) {
    this.id = this.router.snapshot.params['planId'];
  }

  ngOnInit() {
    this.http_get();
  }

  // 确认创建专项
  handleOk(): void {
    this.http.get('/search/addzx', { params: {'title': this.title, 'pid': this.id }}).subscribe();
    this.http_get();
    this.isVisible = false;
    this.title = '';
  }

  // 显示创建专项的模态框
  showModal(): void {
    this.isVisible = true;
  }

  // 取消创建专项
  handleCancel() {
    this.isVisible = false;
    this.title = '';
  }

  // 确认删除专项
  confirm(key: string): void {
    // 删除题集并重新接收计划表
    this.http.get('/search/delzx', { params: {'zxid': key}}).subscribe();
    this.http_get();
  }

  // 获取所有专项信息
  http_get(): void {
    this.loading = true;
    this.dataSource = this.http.get('/search/allzx', { params: {'pid': this.id }});
    this.dataSource.subscribe( (data) => {
      this.specials = data;
      this.updateEditCache();
      this.loading = false;
    });
  }

  // 修改专项名称
  startEdit(key: string): void {
    this.editCache[ key ].edit = true;
  }

  // 提交修改专项的名称
  finishEdit(key: string, title: string): void {
    this.editCache[ key ].edit = false;
    this.dataSource = this.http.get('/search/updatezx', { params: {'title': title, 'zxid': key }});
    this.dataSource.subscribe();
    this.http_get();
  }

  // 取消修改专项名称
  CanceEdit(key: number): void {
    this.editCache[ key ].edit = false;
    this.updateEditCache();
  }

  // 更新专项信息
  updateEditCache(): void {
    this.specials.forEach(item => {
      if (!this.editCache[ item.id ]) {
        this.editCache[ item.id ] = {
          edit: false,
          name: item.special_name
        };
      }
    });
  }

}
