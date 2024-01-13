import { Component } from '@angular/core';
import { FriendService } from '../friend.service';
import { transferService } from 'src/app/TransferService';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/dialog/dialog-box/dialog-box.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {

    constructor(private ser :FriendService, private tSer : transferService,
      private dialog:MatDialog, private router:Router){}

    user = []
    id : number

    ngOnInit(){
      this.ser.getFriends().subscribe(
        data =>{
          this.user =data
 
        },
        error=>{
          let msg = "Sorry, you have no Friends to show!"
          this.openDialog(msg);
          this.router.navigate(['/home'])
        }
      )
    }
    friendId(i){
      console.log(this.user[i].loggedInUserId )
      this.tSer.setFriendId(this.user[i].loggedInUserId );
      
    }


    openDialog(msg){
      this.dialog.open(DialogBoxComponent,{
        width:"500px",
        height:"200px",
        data: msg
      })
   
    }

}
