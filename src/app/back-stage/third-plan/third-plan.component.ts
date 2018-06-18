import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {OJ_LIST, Problem, Subject, Zt} from '../../service/plans.service';
import {Observable} from 'rxjs/Observable';
import {PlansViewService} from '../../service/plans-view.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-third-plan',
  templateUrl: './third-plan.component.html',
  styleUrls: ['./third-plan.component.scss']
})
export class ThirdPlanComponent implements OnInit {

  subjects: Subject[];
  zt: Zt[];
  isVisible = false;
  isOkLoading = false;
  loading = true;
  title: string;
  id: string;
  dataSource: Observable<any>;
  time: string;
  length: string;
  problems: Array<Problem>;
  ojList: any;
  cid: number;
  // 根据id获取模板页面的具体元素
  @ViewChild('inputElement') inputElement: ElementRef;
  @ViewChild('inputElementLength') inputElementLength: ElementRef;

  constructor(
    private plansViewService: PlansViewService,
    private router: ActivatedRoute,
    private http: HttpClient,
    private message: NzMessageService
  ) {
    // 固定的初始化信息放在这里
    this.id = this.router.snapshot.params['zxId'];
    this.problems = new Array<Problem>();
    this.ojList = OJ_LIST;
  }

  ngOnInit() {
    this.http_get();
    this.init();
  }

  // 向后台传输修改创建专题的信息
  handleOk(): void {
    // 传输给后台，让后台创建题集，传递json格式数据
    this.http.post('/search/addzt', JSON.stringify({'cid': this.cid, 'title': this.title, 'begin_time': this.time, 'length': this.length, 'problems': this.problems, 'zxid': this.id })).subscribe( (data) => {
      if ( data == 0 ) {
        this.message.error('创建题集失败....');
      } else {
        this.message.success('创建题集成功....');
      }
    });
    this.problems.splice(0, this.problems.length);
    this.init();
    this.http_get();
    this.isVisible = false;
  }

  // 显示创建专题的模态框
  showModal(): void {
    this.isVisible = true;
  }

  // 取消删除专题
  handleCancel() {
    this.isVisible = false;
    this.init();
  }

  // 确认删除专题
  confirm(key: string): void {
    // 删除题集并重新接收计划表
    this.http.get('/search/delzt', { params: {'cid': key}}).subscribe();
    this.http_get();
  }

  // 获取所有专题信息
  http_get(): void {
    this.loading = true;
    this.dataSource = this.http.get('/search/allzt', { params: {'zxid': this.id }});
    this.dataSource.subscribe( (data) => {
      this.zt = data;
      this.loading = false;
    });
  }

  // 添加题目
  addRow(): void {
    this.problems.push(new Problem('POJ', 1000));
  }

  // 删除题目
  delRow(ind: number): void {
    if ( this.problems.length == 1 ) {
      return ;
    }
    this.problems.splice(ind, 1);
  }

  onChange(value: string): void {
    this.updateValue(value);
  }

  // 键盘输入时检查输入的时长是否与要求匹配
  onChangeLength(value: string): void {
    const reg = /^(\d+):[0-5]?\d:[0-5]?\d$/;
    if ( reg.test(value) && this.checkLength(value) ) {
      this.length = value;
    }
    this.inputElementLength.nativeElement.value = this.length;
  }

  // 键盘输入时检查输入的时间信息是否与要求匹配
  updateValue(value: string): void {
    const reg = /^[1-9]\d{3}-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]?\d):[0-5]?\d:[0-5]?\d$/;
    if ( reg.test(value) && this.checkTime(value) ) {
      this.time = value;
    }
    this.inputElement.nativeElement.value = this.time;
  }

  // 检查时间是否符合要求
  checkTime(value: string): boolean {
    const input_time = new Date(value).getTime();
    const now_time = new Date().getTime();
    return input_time >= now_time;
  }

  // 检查时长是否符合要求
  checkLength(value: string): boolean {
    const list = value.split(':');
    if ( +list[0] > 0 && +list[0] < 1440 ) {
      return true;
    } else if ( +list[0] == 1440 && +list[1] == 0 && +list[2] == 0 ) {
      return true;
    } else {
      return false;
    }
  }

  // 初始化
  init(): void {
    this.problems.splice(0, this.problems.length);
    this.addRow();
    const temp = new Date();
    this.time = temp.getFullYear() + '-' + ( temp.getMonth() + 1) + '-' + temp.getDate() + ' ' + ( temp.getHours() + 1 )  + ':00:00';
    this.length = '5:0:0';
    this.title = 'title';
    this.cid = 0;
  }

  // 显示专题信息
  showInfo(key: number): void {
    this.dataSource = this.http.get('/search/contestinfo', { params: {'cid': key.toString() }});
    this.dataSource.subscribe((data) => {
      this.title = data['title'];
      this.time = data['begin_time'];
      this.length = data['length'];
      this.problems = data['problems'];
      this.cid = key;
    });
    this.showModal();
  }

}
