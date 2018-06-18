import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RecentcontestsComponent } from './recentcontests/recentcontests.component';
import {RouterModule, Routes} from '@angular/router';
import { IndexComponent } from './index/index.component';
import {HttpClientModule} from '@angular/common/http';
import {RecentService} from './service/recent.service';
import { WeekPipe } from './pipe/week.pipe';
import { CountDownPipe } from './pipe/count-down.pipe';
import {PlansService} from './service/plans.service';
import { ShowComponent } from './show/show.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {PlansViewService} from './service/plans-view.service';
import { StateChangePipe } from './pipe/state-change.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './service/user.service';
import { BackStageComponent } from './back-stage/back-stage.component';
import {PowerGuard} from './guard/power.guard';
import { SecondPlanComponent } from './back-stage/second-plan/second-plan.component';
import { ThirdPlanComponent } from './back-stage/third-plan/third-plan.component';
import { BackUserComponent } from './back-stage/back-user/back-user.component';
import { NullToZerroPipe } from './pipe/null-to-zerro.pipe';
import {AdminUserLoginGuard} from './guard/admin-user-login.guard';
import { ShowzwPipe } from './pipe/showzw.pipe';
import { ContentPipe } from './pipe/content.pipe';

const routerConfig: Routes = [
  { path: '', component: IndexComponent, children: [
      { path: 'index', component: IndexComponent},
      { path: '', pathMatch: 'full', redirectTo: 'index'}
    ]},
  { path: 'show/:planId', component: ShowComponent },
  { path: 'contests', component: RecentcontestsComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [PowerGuard] }, //  PowerGuard
  { path: 'adminBack', component: BackStageComponent, canActivate: [AdminUserLoginGuard]},
  { path: 'second/:planId', component: SecondPlanComponent, canActivate: [AdminUserLoginGuard]},
  { path: 'third/:zxId', component: ThirdPlanComponent, canActivate: [AdminUserLoginGuard]},
  { path: 'back_user', component: BackUserComponent, canActivate: [AdminUserLoginGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RecentcontestsComponent,
    IndexComponent,
    WeekPipe,
    CountDownPipe,
    ShowComponent,
    StateChangePipe,
    ProfileComponent,
    BackStageComponent,
    SecondPlanComponent,
    ThirdPlanComponent,
    BackUserComponent,
    NullToZerroPipe,
    ShowzwPipe,
    ContentPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig),
    HttpClientModule,
    FormsModule,
    NgZorroAntdModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [ RecentService, PlansService, PlansViewService, UserService, PowerGuard, AdminUserLoginGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
