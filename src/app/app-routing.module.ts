import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component'
import {RouterModule,Routes} from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { BlogComponent } from './blog/blog.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { MessageboardComponent } from './messageboard/messageboard.component';
import { EngageboardComponent } from './engageboard/engageboard.component';
import {Component, ViewEncapsulation} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
const routes: Routes=[
  
  {path:'dashboard',component:DashboardComponent },
  {path:'users',component:UserComponent},
  {path: '',redirectTo:'/dashboard',pathMatch:'full'},
  {path: 'detail/:rank',component:UserDetailsComponent},
  {path: 'blog',component:BlogComponent},
  {path:  'achievements',component:AchievementsComponent},
  {path: 'message',component:MessageboardComponent},
  {path: 'engage',component:EngageboardComponent}
  
];




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatIconModule
    ],
    exports:[RouterModule,MatIconModule],
    
    
  
})
export class AppRoutingModule { }
