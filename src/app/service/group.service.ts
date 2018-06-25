import { Injectable } from '@angular/core';

@Injectable()
export class GroupService {

  constructor() { }

}

export class UserGroup {
  constructor(
    public id: string,
    public name: string,
    public number: number,
  ) { }
}

