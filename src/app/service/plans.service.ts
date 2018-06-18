import { Injectable } from '@angular/core';

@Injectable()
export class PlansService {

  constructor() { }

}

export class Plan {
  constructor (
    public id: string,
    public name: string,
    public author: string,
    public people: number,
  ) { }
}

// 专项
export class Special {
  constructor(
    public id: number,
    public special_name: string,
    public special_col: number,
  ) {
  }
}

// 专题
export class Subject {
  constructor(
    public id: number,
    public subject_name: string,
    public special_col: number,
  ) {
  }
}

// 题目
export class Topic {
  constructor(
    public topic_name: string,
    public link: string,
    public topic_ind: number,
  ) {
  }
}

// 可选OJ列表
export const OJ_LIST: any = ['51Nod', 'ACdream', 'Aizu', 'AtCoder', 'CodeChef', 'CodeForces', 'CSU', 'EIJudge', 'EOlymp', 'FZU', 'Gym', 'HackerRank', 'HDU', 'HihoCoder', 'HIT', 'HRBUST', 'HUST', 'HYSBZ', 'Kattis', 'LightOJ', 'NBUT', 'OpenJ_Bailian', 'OpenJ_POJ', 'POJ', 'SCU', 'SGU', 'SPOJ', 'TopCoder', 'UESTC', 'UESTC_old', 'URAL', 'UVA', 'UVALive', 'Z_trening', 'ZOJ'
  ];

// 题目信息
export class Problem {
  constructor(
    public oj: string,
    public number: number,
  ) {
  }
}

// 专题信息
export class Zt {
  constructor(
    public id: string,
    public title: string,
  ) { }
}
