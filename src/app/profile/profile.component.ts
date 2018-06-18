import { Component, OnInit } from '@angular/core';
import {User, UserService} from '../service/user.service';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  dataSource: Observable<any>;
  oldpassword = '';
  newpassword = '';
  repassword = '';

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private message: NzMessageService
  ) {
    this.user = this.userService.getUser();
  }

  ngOnInit() {
  }
  
  // 用户修改信息提交
  submit(): void {
    this.dataSource = this.http.get('/search/userupdate', { params: {'sno': this.user.sno, 'sname': this.user.sname, 'vjname': this.user.vjname }});
    this.dataSource.subscribe( ( data ) => {
      this.user = data;
      this.userService.setUser(this.user);
      this.message.success('修改成功！！！');
    });
  }

  // 检查用户两次输入的密码是否一致
  checkPwd(): void {
    if ( this.newpassword != this.repassword ) {
      this.message.error('两次密码输入不一致....');
    }
  }

  // 修改密码提交
  repwd(): void {
    if ( this.newpassword.trim() == '' || this.repassword.trim() == '' || this.newpassword != this.repassword ) {
      this.message.error('输入不合格...');
      return ;
    }
    this.dataSource = this.http.get('/search/repasswd', { params: {'sno': this.user.sno , 'oldpasswd': this.oldpassword, 'passwd': this.newpassword }});
    this.dataSource.subscribe( ( data ) => {
      if ( data == 0 ) {
        this.message.error('密码修改失败，原密码不正确...');
      } else {
        this.message.success('密码修改成功....');
      }
    });
    this.newpassword = '';
    this.repassword = '';
    this.oldpassword = '';
  }

}
