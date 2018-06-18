import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

/*
    用户类定义
 */

@Injectable()
export class UserService {
  private user: User = null;

  constructor(
  ) {
  }

  getUser(): User {
    return this.user;
  }
  setUser(user: User): void {
    this.user = user;
  }

}

export class User {
  constructor(
    public sno: string,
    public sname: string,
    public sgrade: string,
    public passwd: string,
    public vjname: string,
    public status: number,
  ) {
  }
}

export class UserPlan {
  constructor(
    public id: string,
    public status: number,
  ) {
  }
}
