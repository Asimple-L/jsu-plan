import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PlansViewService {
  private content: Content;
  private persons: Person[];

  constructor(private http: HttpClient) { }

  getContent(): Content {
    this.content = CONTENT_PLANS;
    return this.content;
  }

  getPersonInfo(id: number): Person[] {
    this.persons = PERSON;
    return this.persons;
  }

  setPerson(person: Person[]): void {
    this.persons = person;
  }

  getPerson(): Person[] {
    return this.persons;
  }

}

// 计划
export class Content {
  constructor (
    public content_name: string,
    public topics: Topic[]
  ) {}
}

// 专项
export class Special {
  constructor (
    public special_id: number,
    public special_name: string,
    public special_col: number,
  ) { }
}

// 专题
export class Subject {
  constructor (
    public subject_id: number,
    public subject_name: string,
    public subject_col: number,
    public special: Special
  ) { }
}

// 题目
export class Topic {
  constructor (
    public topic_name: string,
    public link: string,
    public topic_ind: number,
    public subject: Subject
  ) { }
}

export const CONTENT_PLANS: any = {
  'content_name': '2016级程序设计基础一(2017春季上)(140)',
  'topics': [
    {
      'topic_name': 'SDUT-1110',
      'link': 'http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1110.html',
      'topic_ind': 1,
      'subject': {
        'subject_name': '基础(4)',
        'subject_col': 4,
        'special':
          {
          'special_name': '实验1---顺序结构程序设计(4)',
          'special_col': 4,
        }
      }
    },
    {
      'topic_name': 'SDUT-1111',
      'link': 'http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1111.html',
      'topic_ind': 2,
      'subject': {
        'subject_name': '基础(4)',
        'subject_col': 4,
        'special': {
          'special_name': '实验1---顺序结构程序设计(4)',
          'special_col': 4,
        }
      }
    },
    {
      'topic_name': 'SDUT-1112',
      'link': 'http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1112.html',
      'topic_ind': 3,
      'subject': {
        'subject_name': '基础(4)',
        'subject_col': 4,
        'special': {
          'special_name': '实验1---顺序结构程序设计(4)',
          'special_col': 4,
        }
      }
    },
    {
      'topic_name': 'SDUT-1113',
      'link': 'http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1113.html',
      'topic_ind': 4,
      'subject': {
        'subject_name': '基础(4)',
        'subject_col': 4,
        'special': {
          'special_name': '实验1---顺序结构程序设计(4)',
          'special_col': 4,
        }
      }
    },
    {
      'topic_name': 'SDUT-1114',
      'link': 'http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1114.html',
      'topic_ind': 5,
      'subject': {
        'subject_name': '扩展(2)',
        'subject_col': 2,
        'special': {
          'special_name': '123(2)',
          'special_col': 2,
        }
      }
    },
    {
      'topic_name': 'SDUT-1115',
      'link': 'http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1115.html',
      'topic_ind': 6,
      'subject': {
        'subject_name': '扩展(2)',
        'subject_col': 2,
        'special': {
          'special_name': '123(2)',
          'special_col': 2,
        }
      }
    },
    {
      'topic_name': 'SDUT-1116',
      'link': 'http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1115.html',
      'topic_ind': 7,
      'subject': {
        'subject_name': '45646(10)',
        'subject_col': 9,
        'special': {
          'special_name': '45646131(10)',
          'special_col': 10,
        }
      }
    },
    {
      'topic_name': 'SDUT-1116',
      'link': 'http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1115.html',
      'topic_ind': 8,
      'subject': {
        'subject_name': '45646(10)',
        'subject_col': 10,
        'special': {
          'special_name': '45646131(10)',
          'special_col': 10,
        }
      }
    },
    {
      'topic_name': 'SDUT-1116',
      'link': 'http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1115.html',
      'topic_ind': 9,
      'subject': {
        'subject_name': '45646(10)',
        'subject_col': 10,
        'special': {
          'special_name': '45646131(10)',
          'special_col': 10,
        }
      }
    },
    {
      'topic_name': 'SDUT-1116',
      'link': 'http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1115.html',
      'topic_ind': 10,
      'subject': {
        'subject_name': '45646(10)',
        'subject_col': 10,
        'special': {
          'special_name': '45646131(10)',
          'special_col': 10,
        }
      }
    },
    {
      'topic_name': 'SDUT-1116',
      'link': 'http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1115.html',
      'topic_ind': 11,
      'subject': {
        'subject_name': '45646(10)',
        'subject_col': 10,
        'special': {
          'special_name': '45646131(10)',
          'special_col': 10,
        }
      }
    },
    {
      'topic_name': 'SDUT-1116',
      'link': 'http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1115.html',
      'topic_ind': 12,
      'subject': {
        'subject_name': '45646(10)',
        'subject_col': 10,
        'special': {
          'special_name': '45646131(10)',
          'special_col': 10,
        }
      }
    },
    {
      'topic_name': 'SDUT-1116',
      'link': 'http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1115.html',
      'topic_ind': 13,
      'subject': {
        'subject_name': '45646(10)',
        'subject_col': 10,
        'special': {
          'special_name': '45646131(10)',
          'special_col': 10,
        }
      }
    },
    {
      'topic_name': 'SDUT-1116',
      'link': 'http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1115.html',
      'topic_ind': 14,
      'subject': {
        'subject_name': '45646(10)',
        'subject_col': 10,
        'special': {
          'special_name': '45646131(10)',
          'special_col': 10,
        }
      }
    },
    {
      'topic_name': 'SDUT-1116',
      'link': 'http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1115.html',
      'topic_ind': 15,
      'subject': {
        'subject_name': '45646(10)',
        'subject_col': 9,
        'special': {
          'special_name': '45646131(10)',
          'special_col': 10,
        }
      }
    },
    {
      'topic_name': 'SDUT-1116',
      'link': 'http://acm.sdut.edu.cn/onlinejudge2/index.php/Home/Index/problemdetail/pid/1115.html',
      'topic_ind': 16,
      'subject': {
        'subject_name': '456(1)',
        'subject_col': 1,
        'special': {
          'special_name': '45646131(10)',
          'special_col': 10,
        }
      }
    }
  ]
};

export class Person {
  constructor (
    public id: number,
    public person_name: string,
    public person_des: string,
    public peron_complete: number,
    public peron_count: number,
    public examinations: Examination[],
  ) { }
}

export class Examination {
  constructor (
    public topic_name: string,
    public time: string,
  ) {}
}

export const PERSON: any = [
  { 'person_name': '朱炳坤', 'id': 1, 'person_des': '软件工程', 'peron_complete': 13, 'peron_count': 16, 'examinations': [
      { 'topic_name': 1, 'state': 0, 'time': null },
      { 'topic_name': 2, 'state': 1, 'time': '2016-09-20' },
      { 'topic_name': 3, 'state': 2, 'time': '2016-09-20' },
      { 'topic_name': 4, 'state': 1, 'time': '2016-09-20' },
      { 'topic_name': 5, 'state': 2, 'time': '2016-09-20' },
      { 'topic_name': 6, 'state': 1, 'time': '2016-09-20' },
      { 'topic_name': 7, 'state': 1, 'time': '2016-09-20' },
      { 'topic_name': 8, 'state': 1, 'time': '2016-09-20' },
      { 'topic_name': 9, 'state': 1, 'time': '2016-09-20' },
      { 'topic_name': 10, 'state': 1, 'time': '2016-09-20' },
      { 'topic_name': 11, 'state': 1, 'time': '2016-09-20' },
      { 'topic_name': 12, 'state': 1, 'time': '2016-09-20' },
      { 'topic_name': 13, 'state': 1, 'time': '2016-09-20' },
      { 'topic_name': 14, 'state': 1, 'time': '2016-09-20' },
      { 'topic_name': 15, 'state': 1, 'time': '2016-09-20' },
      { 'topic_name': 16, 'state': 1, 'time': '2016-09-20' },
    ]},
  { 'person_name': '李钢', 'id': 2, 'person_des': '软件工程', 'peron_complete': 13, 'peron_count': 16, 'examinations': [
      { 'topic_ind': 1, 'state': 0, 'time': null },
      { 'topic_ind': 2, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 3, 'state': 2, 'time': '2016-09-20' },
      { 'topic_ind': 4, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 5, 'state': 2, 'time': '2016-09-20' },
      { 'topic_ind': 6, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 7, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 8, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 9, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 10, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 11, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 12, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 13, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 14, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 15, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 16, 'state': 1, 'time': '2016-09-20' },
    ]},
  { 'person_name': '古晓宇', 'id': 3, 'person_des': '软件工程', 'peron_complete': 13, 'peron_count': 16, 'examinations': [
      { 'topic_ind': 1, 'state': 0, 'time': null },
      { 'topic_ind': 2, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 3, 'state': 2, 'time': '2016-09-20' },
      { 'topic_ind': 4, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 5, 'state': 2, 'time': '2016-09-20' },
      { 'topic_ind': 6, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 7, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 8, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 9, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 10, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 11, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 12, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 13, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 14, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 15, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 16, 'state': 1, 'time': '2016-09-20' },
    ]},
  { 'person_name': '刘杰', 'id': 4, 'person_des': '软件工程', 'peron_complete': 13, 'peron_count': 16, 'examinations': [
      { 'topic_ind': 1, 'state': 0, 'time': null },
      { 'topic_ind': 2, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 3, 'state': 2, 'time': '2016-09-20' },
      { 'topic_ind': 4, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 5, 'state': 2, 'time': '2016-09-20' },
      { 'topic_ind': 6, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 7, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 8, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 9, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 10, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 11, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 12, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 13, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 14, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 15, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 16, 'state': 1, 'time': '2016-09-20' },
    ]},
  { 'person_name': '123', 'id': 5, 'person_des': '软件工程', 'peron_complete': 13, 'peron_count': 16, 'examinations': [
      { 'topic_ind': 1, 'state': 0, 'time': null },
      { 'topic_ind': 2, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 3, 'state': 2, 'time': '2016-09-20' },
      { 'topic_ind': 4, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 5, 'state': 2, 'time': '2016-09-20' },
      { 'topic_ind': 6, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 7, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 8, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 9, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 10, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 11, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 12, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 13, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 14, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 15, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 16, 'state': 1, 'time': '2016-09-20' },
    ]},
  { 'person_name': '456', 'id': 6, 'person_des': '软件工程', 'peron_complete': 13, 'peron_count': 16, 'examinations': [
      { 'topic_ind': 1, 'state': 0, 'time': null },
      { 'topic_ind': 2, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 3, 'state': 2, 'time': '2016-09-20' },
      { 'topic_ind': 4, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 5, 'state': 2, 'time': '2016-09-20' },
      { 'topic_ind': 6, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 7, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 8, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 9, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 10, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 11, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 12, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 13, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 14, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 15, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 16, 'state': 1, 'time': '2016-09-20' },
    ]},
  { 'person_name': '789', 'id': 7, 'person_des': '软件工程', 'peron_complete': 13, 'peron_count': 16, 'examinations': [
      { 'topic_ind': 1, 'state': 0, 'time': null },
      { 'topic_ind': 2, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 3, 'state': 2, 'time': '2016-09-20' },
      { 'topic_ind': 4, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 5, 'state': 2, 'time': '2016-09-20' },
      { 'topic_ind': 6, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 7, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 8, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 9, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 10, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 11, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 12, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 13, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 14, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 15, 'state': 1, 'time': '2016-09-20' },
      { 'topic_ind': 16, 'state': 1, 'time': '2016-09-20' },
    ]},

];
