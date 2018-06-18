import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from '../service/user.service';
/*
  用户权限拦截：
    管理员返回true
 */
@Injectable()
export class AdminUserLoginGuard implements CanActivate {
  canActivate() {
    if ( this.userSerice.getUser() == null || this.userSerice.getUser().status != 1 ) {
      this.router.navigateByUrl('/');
      return false;
    } else {
      return true;
    }
  }
  constructor(
    private userSerice: UserService,
    private router: Router
  ) { }
}
