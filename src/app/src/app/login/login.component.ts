import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { transferService } from 'src/app/TransferService';
import { DialogBoxComponent } from 'src/app/dialog/dialog-box/dialog-box.component';
import { HttpService } from 'src/app/service';
import { User } from 'src/app/user.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
              
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  msg!:string|null;
  errorMsg!:string|null
  showSpinnner = false;
  


  constructor(private fb:FormBuilder,private service:HttpService,private router:Router,private TransferService: transferService,
    private dialog:MatDialog){
   

  }

  userId :any;

// export const exportedUser = new UserComponent().user;
  ngOnInit(): void {
    // EventEmitter 
    this.loginForm=this.fb.group({
      email:new FormControl(null),
      password:new FormControl(null)
    })
  }

  login(){
    // this.service.isLogin="true";
    let email = this.loginForm.get('email')?.value
    let password=this.loginForm.get('password')?.value
    let user=new User();
    user.email=email
    user.password=password
    this.showSpinnner = true;
    if(this.showSpinnner){
      document.querySelector<HTMLElement>(".form").style.visibility = "hidden"
    }
   
   this.service.login(user).subscribe(
      data=>{
        this.service.isLogin="YES";
        this.userId=data.id
        this.TransferService.setId(this.userId)
        // console.log(this.userId)
        this.errorMsg=null
        this.router.navigate(['home'])
        // console.log(this.userId)
        // localStorage.setItem('data', )
        user.id = data.id;
        user.email = data.email;
        user.mobileNumber = data.mobileNumber;
        user.name = data.name
        user.tempFriends = data.tempFriends
        
        localStorage.setItem("login" ,this.service.isLogin)

        console.log(localStorage.getItem("login"))



        window.localStorage.setItem('user', JSON.stringify(user))
        var obj = window.localStorage.getItem('user') 
        console.log(JSON.parse(obj))

        this.showSpinnner = false;

        
     
        
      },
      error=>{
        this.errorMsg=error.error.errorMessage
        this.msg=null;
        console.log(error)
        console.log(error.error.errorMessage)
        
          this.showSpinnner = false;
          document.querySelector<HTMLElement>(".form").style.visibility = "visible"
       
        // this.showSpinnner = false;
        this.openDialog(this.errorMsg)
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


