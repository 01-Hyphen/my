import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FriendService } from 'src/app/add-friend/friend.service';
import { DialogBoxComponent } from 'src/app/dialog/dialog-box/dialog-box.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router:Router, private ser :FriendService, private route:ActivatedRoute, private dialog:MatDialog) { }
  user=JSON.parse(window.localStorage.getItem('user'));
  userLogo = this.user.name.slice(0,1);
  ngOnInit(): void {
    // window.localStorage.setItem('user', JSON.stringify(user))
    //  this.user = window.localStorage.getItem('user') 
    //  JSON.parse(this.user)
     console.log(this.user.name)
  }

  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  seeFriends(){
    this.ser.getAllUsers()
    this.router.navigate(["friends"],{relativeTo:this.route})

  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/auth'])
  }


}

