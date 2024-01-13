import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { RequestListComponent } from './add-friend/request-list/request-list.component';
import { FriendsComponent } from './add-friend/friends/friends.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { FriendProfileComponent } from './add-friend/friend-profile/friend-profile.component';
import { LoginComponent } from './src/app/login/login.component';
import { LoginAuthGaurd } from './src/app/login/login-auth.guard';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes:Routes=[
  {path:'',component:LoginComponent},
  {path:'auth',redirectTo:''},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent,canActivate:[LoginAuthGaurd],children:[
  {path:'add',component:AddStockComponent},
  {path:'update',component:UpdateComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'friends', component:AddFriendComponent},
  {path: 'tempFriendList', component:RequestListComponent},
  {path:'Friends', component:FriendsComponent},
  {path: 'FriendProfile', component:FriendProfileComponent},
  {path: 'LeaderBoard', component:LeaderBoardComponent},
  {path:'',component:HomePageComponent},
  {path:'home',redirectTo:''},
  {path:'about', component:AboutComponent},
  {path:'contact',component:ContactComponent}
  

  ]},
  
  
 

  // {path:'home',component:HomeComponent,children:[{path:':id/update',component:UpdateComponent},{path:':id/portfolio',component:PortfolioComponent}]},
 
  // {path:'home',redirectTo:'home/:id'},

  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)

  ],

  exports:[RouterModule]
})
export class AppRoutingModule { }
