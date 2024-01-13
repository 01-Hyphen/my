import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validator, Validators } from '@angular/forms';
import { HttpService } from '../service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { transferService } from '../TransferService';
import { DialogBoxComponent } from '../dialog/dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateForm!: FormGroup; 
  successMsg: string | null = null;
  errorMsg : string | null = null;
  currentUserData: any = {};
  msg;

  constructor(private fb:FormBuilder,private service: HttpService,private router:Router ,private route :ActivatedRoute,private transferService:transferService,
    private dialog:MatDialog){ }

 

  ngOnInit(): void {
    
  
   
    // console.log("from update component"+ this.transferService.getId())
    this.updateForm = this.fb.group({
      name : [null,Validators.required],
      mobilenumber: [null,Validators.required]
    });
    

    this.service.getUserData(this.transferService.getId()).subscribe(
      userData => {
        this.currentUserData = userData;
        this.updateForm.patchValue({
          name: userData.name,
          mobilenumber : userData.mobileNumber
        });
        
      },
      error => {
        this.errorMsg = " Failed to fectch user data."
      }
    )
  }
  submitForm(){
  
    const updateUser ={
      name : this.updateForm.get('name')?.value,
      mobileNumber: this.updateForm.get('mobilenumber')?.value
    }

    console.log(updateUser.name.length);
    if(updateUser.name.length == 0){
      this.msg= "Name cannot be empty."
    }else if(updateUser.mobileNumber== null){
      this.msg = "Mobile Nummber cannot be empty."
    }else if(!(updateUser.mobileNumber.length == 10)){
      this.msg = "Mobile Number must have 10 digits."
    }
  
    
    this.service.updateUserData(updateUser,this.transferService.getId()).subscribe(
      data => {  
        this.errorMsg = null;
        this.successMsg = "Profile updated sucessfully."
        this.openDialog(this.successMsg);
        // this.toHome();
      },
      error => {
        this.successMsg = null ;
        this.errorMsg = this.msg;
        this.openDialog(this.errorMsg);
      }
    );

    // if(!this.updateForm.invalid){
    //   this.openDialog();
    // }

  }

  toHome(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  openDialog(msg){
    this.dialog.open(DialogBoxComponent,{
      width:"500px",
      height:"200px",
      data: msg
    })
 
  }

}
