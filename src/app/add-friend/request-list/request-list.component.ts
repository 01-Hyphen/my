import { Component } from '@angular/core';
import { transferService } from 'src/app/TransferService';
import { FriendService } from '../friend.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/dialog/dialog-box/dialog-box.component';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {

  constructor(private tSer : transferService ,private ser:FriendService, private router:Router, private dialog:MatDialog){
    this.router.routeReuseStrategy.shouldReuseRoute = ()=>false;

  }

  friends = []
  message =''

  ngOnInit(){
    this.showFriendRequests();
    

  
  } 

  confirmRequest(i:number){
    const senderFriendId = this.friends[i].id
    const confirmerId = this.tSer.getId()
    

    this.ser.confirmFriend(senderFriendId,confirmerId).subscribe(
      data => {
        console.log((data));
        this.openDialog(data.message);
        this.showFriendRequests();
       
        

      },
      error => {
        console.log(error.error.errorMessage)
      }
    )
    
    
  }

  showFriendRequests(){
    this.ser.getTempFriends().subscribe(
      data => {
        this.friends=data
 
      },
      error =>{
        this.friends=[]
        this.message = "Request list is empty!"
        this.openDialog(this.message);
        console.log(this.message)
        this.router.navigate(['/home']);
      }

    );


  }

  rejectRequest(i){
    const requesterFriendId = this.friends[i].id
    this.ser.rejectRequest(requesterFriendId).subscribe(
      data => {
        console.log(data)
        this.openDialog(data.message)
        this.showFriendRequests();
        

      },
      error => {
        console.log(error.error.errorMessage)
        this.openDialog(error.error.errorMessage)
      }

    )
    // location.reload();



}

openDialog(msg){
  this.dialog.open(DialogBoxComponent,{
    width:"500px",
    height:"200px",
    data: msg
  })

}
}

