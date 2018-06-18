import { Component, OnInit } from '@angular/core';
import {User, UserService} from '../../service/user.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-back-user',
  templateUrl: './back-user.component.html',
  styleUrls: ['./back-user.component.scss']
})
export class BackUserComponent implements OnInit {

  loading = true;
  user: User[];
  dataSource: Observable<any>;
  isVisible: boolean;
  addUser: User;
  isOkLoading = false;
  editCache = {};
  isVisibleEdit: false;
  flag = true;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private message: NzMessageService
  ) {
  }

  ngOnInit() {
    this.init();
    this.http_get();
  }

  // 显示创建用户的模态框
  showModal(): void {
    this.isVisible = true;
  }

  // 提交用户信息
  handleOk(): void {
    // 提交用户创建请求
    if ( this.flag == true ) {
      this.message.error('用户已存在...');
      return ;
    }
    this.http.post('/search/adduser', JSON.stringify(this.addUser)).subscribe();
    this.isVisible = false;
    this.http_get();
  }

  // 初始化信息
  init(): void {
    this.addUser = new User('20164206666', '叶良辰', '大二', '123456', '', 0);
    this.isVisible = false;
  }

  // 获取所有用户信息
  http_get(): void {
    this.dataSource = this.http.get('/search/alluser');
    this.dataSource.subscribe( (data) => {
      this.user = data;
      this.updateEditCache();
      this.loading = false;
    });
  }

  handleCancelEdit() {
    this.isVisibleEdit = false;
  }

  // 编辑用户信息
  startEdit(key: number, x: string): void {
    if ( x == 'name' ) {
      this.editCache[ key ].editName = true;
    } else if ( x == 'vjname' ) {
      this.editCache[ key ].editVjname = true;
    } else if ( x == 'sgrade' ) {
      this.editCache[ key ].editSgrade = true;
    }
  }

  // 提交编辑信息
  finishEdit(key: string, x: string): void {
    // 修改用户信息
    this.http.post('/search/updateuser', JSON.stringify({'sno': this.editCache[key].sno, 'sname': this.editCache[key].name, 'sgrade': this.editCache[key].sgrade, 'vjname': this.editCache[key].vjname, 'status': this.editCache[key].status })).subscribe();
    this.CanceEdit(key, x);
    this.http_get();
}

  // 取消编辑用户信息
  CanceEdit(key: string, x: string): void {
    if ( x == 'name' ) {
      this.editCache[ key ].editName = false;
    } else if ( x == 'vjname' ) {
      this.editCache[ key ].editVjname = false;
    } else if ( x == 'sgrade' ) {
      this.editCache[ key ].editSgrade = false;
    }
    this.updateEditCache();
  }

  // 更新信息
  updateEditCache(): void {
    this.user.forEach(item => {
      if (!this.editCache[ item.sno ]) {
        this.editCache[ item.sno ] = {
          name: item.sname,
          editName: false,
          sno: item.sno,
          status: item.status,
          editStatus: false,
          vjname: item.vjname,
          editVjname: false,
          sgrade: item.sgrade,
          editSgrade: false,
        };
      }
    });
  }

  // 确认删除用户
  confirm(id: string): void {
    this.http.get('/search/deluser', { params: {'sno': id}}).subscribe();
    this.http_get();
  }

  // 设置管理员
  clickSwitch(key: string): void {
    this.http.post('/search/updateuser', JSON.stringify({'sno': this.editCache[key].sno, 'sname': this.editCache[key].name, 'sgrade': this.editCache[key].sgrade, 'vjname': this.editCache[key].vjname, 'status': this.editCache[key].status })).subscribe();
    this.http_get();
  }

  // 当前用户不能设置自己的管理员信息
  canClick(key: string): boolean {
    if ( this.userService.getUser().sno == key ) {
      return true;
    }
    return false;
  }

  // 检查用户是否被注册
  check(): void {
    this.dataSource = this.http.get('/search/userexits', { params: {'sno': this.addUser.sno }});
    this.dataSource.subscribe( ( data ) => {
      if ( data == 1 ) {
        this.message.create('error', `用户名已存在`);
        this.flag = true;
      } else {
        this.flag = false;
      }
    });
  }

}
