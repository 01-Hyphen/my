import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './src/app/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header/header.component';
import { UpdateComponent } from './update/update.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { transferService } from './TransferService';
import { AddStockComponent } from './add-stock/add-stock.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { RequestListComponent } from './add-friend/request-list/request-list.component';
import { FriendsComponent } from './add-friend/friends/friends.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { FriendProfileComponent } from './add-friend/friend-profile/friend-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogBoxComponent } from './dialog/dialog-box/dialog-box.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    HeaderComponent,
    UpdateComponent,
    PortfolioComponent,
    AddStockComponent,
    AddFriendComponent,
    RequestListComponent,
    FriendsComponent,
    LeaderBoardComponent,
    FriendProfileComponent,
    DialogBoxComponent,
    HomePageComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent

   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
