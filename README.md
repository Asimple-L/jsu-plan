# JsuPlan

基于Angular4+Zorro的ACM计划进展展示的前端页面。项目目的在于实现ACM训练的在线自动管理，管理可以利用本系统自动在VJ上创建题集，训练生登录账号注册题集，或者管理员将用户组注册至计划，系统通过对题集的实时监测不断更新统计题集的刷题进度信息。

## 运行方法

安装[Angular的cli库](https://angular.cn/docs "点击进入Angular教程")<br/>
 `npm install -g @angular/cli`<br/>
安装[Zorro](https://ng.ant.design/docs/getting-started/zh "点击进入Zorro教程")插件库<br/>
 `npm install ng-zorro-antd --save`<br/>

## 模块说明

*    首页          `index.component`            路径  `/src/app/index`
*    导航栏        `navigation.component`       路径  `/src/app/navigation`
*    最近比赛      `recentcontests.component`   路径  `/src/app/recentcontests`
*    刷题统计      `show.component`             路径  `/src/app/show`
*    后台管理      `back-stage.component`       路径  `/src/app/back-stage`
*    专项管理      `second-plan.component`      路径  `/src/app/back-stage/second-plan`
*    专题管理      `third-plan.component`       路径  `/src/app/back-stage/third-plan`
*    用户管理       `back-user.component`       路径  `/src/app/back-stage/back-user`
*    用户组管理     `user-group.component`      路径  `/src/app/back-stage/user-group`
*    用户组用户管理 `group-user.component`      路径  `/src/app/back-stage/group-user`
*    用户组计划管理 `group-plan.component`      路径  `/src/app/back-stage/group-plan`
