import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class IntermediatorService {

  private emitChangeSource = new Subject();
  private selectChangeSource = new Subject();

  changeEmtter = this.emitChangeSource.asObservable();
  selectEmitter = this.selectChangeSource.asObservable();

  emitChange(isShowInfo: boolean): void {
    this.emitChangeSource.next(isShowInfo);
  }
  selectChange(key: string): void {
    this.selectChangeSource.next(key);
  }

}
