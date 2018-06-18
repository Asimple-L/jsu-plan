import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from '../service/user.service';
/*
  用户登录检测：
    是否有用户登录
 */
@Injectable()
export class PowerGuard implements CanActivate {
  canActivate() {
    if ( this.userService.getUser() != null ) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }
}
