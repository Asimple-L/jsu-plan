import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Content, Person, PlansViewService} from '../service/plans-view.service';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {NzModalService} from 'ng-zorro-antd';
import {IntermediatorService} from '../service/intermediator.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit, AfterContentChecked {

  /*  修改请重构  */
  public id: string;
  data = [];
  loading = true;
  person_loading = true;
  content: Content;
  persons: Person[];
  temp_person: Person[];
  widths: Array<string>;
  scrolls: any;
  singleWidth: number;
  isLoading = true;
  dataSource1: Observable<any>;
  dataSource2: Observable<any>;
  content_flag: boolean;
  person_flag: boolean;

  isShowInfo = false;
  gid: string;

  constructor(
    private router: ActivatedRoute,
    private plansViewService: PlansViewService,
    private http: HttpClient,
    private modalService: NzModalService,
    private inte: IntermediatorService,
  ) {
    this.id = this.router.snapshot.params['planId'];
  }

  ngOnInit() {
    this.get_content();
    this.get_person('');
    this.init();
    this.inte.changeEmtter.subscribe( data => {
      if ( data == true ) {
        this.isShowInfo = true;
      }
    });
    this.inte.selectEmitter.subscribe( data => {
      this.gid = data.toString();
      this.get_person(this.gid);
    });
  }

  // 动态显示x、y滑轮的位置
  ngAfterContentChecked(): void {
    const temp = window.innerHeight - 170 ;
    this.scrolls = {x: this.singleWidth * this.persons.length + 360 + 'px', y: temp + 'px'};
  }

  // 检查专项显示
  checkSp(ind: number): boolean {
    if ( ind == 0 ) {
      return true;
    } else if ( this.content.topics[ind].subject.special.special_name != this.content.topics[ind - 1].subject.special.special_name || this.content.topics[ind].subject.special.special_col != this.content.topics[ind - 1].subject.special.special_col ) {
      return true;
    }
    return false;
  }

  // 检查专题显示
  checkSu(ind: number): boolean {
    if ( ind == 0 ) {
      return true;
    } else if ( this.content.topics[ind].subject.subject_name != this.content.topics[ind - 1].subject.subject_name || this.content.topics[ind].subject.subject_col != this.content.topics[ind - 1].subject.subject_col ) {
      return true;
    }
    return false;
  }

  // 组件初始化信息
  init(): void {
    this.loading = true;
    this.person_loading = false;
    this.content_flag = false;
    this.widths = new Array<string>();
    this.widths.push('120px', '120px', '120px');
    this.content = this.plansViewService.getContent();
    const temp = window.innerHeight - 170 ;
    this.scrolls = {x: this.singleWidth * this.persons.length + 360 + 'px', y: temp + 'px'};
  }

  // 获取计划下所有用户的信息
  get_person(key: string): void {
    this.persons = this.plansViewService.getPersonInfo(+this.id);
    this.isLoading = true;
    this.dataSource2 = this.http.get('/search/pstatus', { params: {'planid': this.id, 'gid': key}});
    this.dataSource2.subscribe( ( data ) => {
      this.persons = data;
      this.temp_person = data;
      this.temp_person.sort( ( a, b ) => {
        if ( a.peron_complete == b.peron_complete ) {
          return a.id < b.id ? 1 : -1 ;
        }
        return a.peron_complete > b.peron_complete ? 1 : -1;
      });
      this.person_flag = true;
      if ( this.content_flag && this.person_flag ) {
        this.isLoading = false;
      }
    });
  }

  // 获取计划信息—— 计划名->专项->专题->题集
  get_content(): void {
    this.dataSource1 = this.http.get('/search/getall', { params: {'planid': this.id}});
    this.dataSource1.subscribe( ( datas ) => {
      this.content = datas;
      this.singleWidth = Math.floor( (2072 - 360 ) / this.persons.length );
      for (const t of this.content.topics ) { this.widths.push(this.singleWidth + 'px'); }
      const temp = window.innerHeight - 170 ;
      this.scrolls = {x: this.singleWidth * this.persons.length + 360 + 'px', y: temp + 'px'};
      this.content_flag = true;
      if ( this.content_flag && this.person_flag ) {
        this.isLoading = false;
      }
    });
  }

  // 检查题目是否AC
  checkAc(name: string, i: number): boolean {
    for ( const e of this.persons[i].examinations ) {
      if ( e.topic_name == name ) {
        return true;
      }
    }
    return false;
  }

  // 显示AC时间
  showAcTime(name: string, i: number): string {
    for ( const e of this.persons[i].examinations ) {
      if ( e.topic_name == name ) {
        return e.time;
      }
    }
    return '';
  }

  // 隐藏统计信息
  hidden(): void {
    this.isShowInfo = false;
  }

}
