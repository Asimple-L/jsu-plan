import { Component, OnInit } from '@angular/core';
import {Contest, RecentService} from '../service/recent.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-recentcontests',
  templateUrl: './recentcontests.component.html',
  styleUrls: ['./recentcontests.component.scss']
})
export class RecentcontestsComponent implements OnInit{

  contests: Observable<Array<Contest>>;
  private dataSource: Observable<any>;

  constructor(private recentService: RecentService, private http: HttpClient) {
    // 获取最近比赛信息并显示
    this.dataSource = this.http.get('/search/recent');
    this.dataSource.subscribe( (data) => {
      this.contests = data;
    });
  }

  ngOnInit() {
  }

}
