import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FriendService } from './friend.service';
import { User } from '../user.model';
import { transferService } from '../TransferService';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog/dialog-box/dialog-box.component';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {

  constructor(private ser : FriendService ,private Tser : transferService,
    private dialog:MatDialog){}

  users :any[] =[]
  userId : number;


 

  ngOnInit(): void {
    this.ser.getAllUsers().subscribe(
      data => {
        this.users = data
        console.log(this.users[0])
        this.userId = this.Tser.getId();
      
        
      

        // console.log(this.userId)
        
  
      }
    )

    
  }

  sendReq(i){
    let receiver = this.users[i];
    this.ser.sendFriendRequest(+receiver.loggedInUserId,null).subscribe(
      data => {
        console.log(data);
        this.openDialog(data.message)
        

      
      },
      error => {
        console.log(error.error.errorMessage )
        // alert(error.error.errorMessage )
        this.openDialog(error.error.errorMessage);

      

      }
      
    )
  } 

  openDialog(msg){
    this.dialog.open(DialogBoxComponent,{
      width:"500px",
      height:"200px",
      data: msg
    })

  }

}
