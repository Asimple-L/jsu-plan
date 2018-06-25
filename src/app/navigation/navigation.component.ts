import {AfterContentChecked, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {User, UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {IntermediatorService} from '../service/intermediator.service';
import {UserGroup} from '../service/group.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterContentChecked {

  isVisible = false;
  isOkLoading = false;
  username = '';
  password = '';
  user: User;
  dataSource: Observable<any>;
  flag = false;
  userGroups: UserGroup[];
  info = false;
  selectedValue = '所有';

  constructor(
    private modalService: NzModalService,
    private userService: UserService,
    private message: NzMessageService,
    private router: Router,
    private http: HttpClient,
    private inter: IntermediatorService,
  ) {
  }

  ngOnInit() {
    this.dataSource = this.http.get('/search/allgroup');
    this.dataSource.subscribe( (data) => {
      this.userGroups = data;
      this.userGroups.unshift(new UserGroup('', '所有', 0));
      this.selectedValue = '所有';
    });
  }

  ngAfterContentChecked(): void {
    const paths = location.pathname.split('/');
    if ( paths == null || paths.length < 1 ) {
      return ;
    }
    if ( paths[1] == 'show' ) {
      this.info = true;
    } else {
      this.info = false;
    }
  }

  // 发送统计信息
  handleInfo(): void {
    this.inter.emitChange(true);
  }

  /*
    注册提示框：
      暂时显示不支持登录，如果想要注册可以修改下面的内容加入注册功能
   */
  register(): void {
    this.modalService.info({
      nzTitle: '注册',
      nzContent: '<p>本站不开放自由注册，申请帐号请联系管理员</p>',
      nzOnOk: () => { }
    });
  }

  // 显示登录对话框
  showModal(): void {
    this.isVisible = true;
  }

  // 提交登录
  handleOk(): void {
    if ( this.password == null || this.password.trim() == '' || this.username == null || this.username.trim() == '' ) {
      this.message.create('error', `请输入用户名或密码....`);
      return ;
    }
    if ( this.flag == true ) {
      this.message.error('用户不存在...');
      return ;
    }
    this.isOkLoading = true;
    /*
    * 1、向后端发请求检查密码和用户是否匹配
    * 2、接收结果
    */
    this.dataSource = this.http.post('/search/login', JSON.stringify({'sno': this.username, 'passwd': this.password }));
    this.dataSource.subscribe( (data) => {
      this.user = data;
      if ( this.user == null ) {
        this.message.create('error', `用户名错误或密码不正确`);
      } else {
        this.isVisible = false;
        this.userService.setUser(this.user);
      }
      this.isOkLoading = false;
    });
  }

  // 取消登录
  handleCancel(): void {
    this.isVisible = false;
  }

  // 是否有用户登录
  haveUser(): boolean {
    return this.user != null;
  }

  // 检查用户名是否存在
  checkUsername(): void {
    this.dataSource = this.http.get('/search/userexits', { params: {'sno': this.username }});
    this.dataSource.subscribe( ( data ) => {
      if ( data == 0 ) {
        this.message.create('error', `用户名不存在`);
        this.flag = true;
      } else {
        this.flag = false;
      }
    });
  }

  // 退出登录
  loginOut(): void {
    this.username = null;
    this.password = null;
    this.user = null;
    this.flag = true;
    this.userService.setUser(null);
    // 无用户登录，直接跳转到首页
    this.router.navigateByUrl('/');
  }

  submitSelect(): void {
    this.inter.selectChange(this.selectedValue);
  }

}
