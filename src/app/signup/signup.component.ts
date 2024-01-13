import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../user.model';
import { HttpService } from '../service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog/dialog-box/dialog-box.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private fb : FormBuilder,private router:Router, private service:HttpService,private dialog:MatDialog){}
  signupForm:any
  successMsg!:string|null
  errorMessage!:string|null
  passwordNotMatched =""

  ngOnInit(): void {
    this.signupForm=this.fb.group({
      name:new FormControl(null, Validators.required),
      email:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),
      contactNumber:new FormControl(null,Validators.required),
      confirmPassword: new FormControl(null,Validators.required)


    })
  }

  submit(){
    let user = new User()
    user.name=this.signupForm.get('name').value
    user.email=this.signupForm.get('email').value
    user.mobileNumber= +this.signupForm.get('contactNumber').value
    user.password=this.signupForm.get('password').value


    if(user.password != this.signupForm.get('confirmPassword').value){
     
      this.errorMessage ="Password does not matched";
      this.openDialog(this.errorMessage);

    }else{

    console.log(user)
    this.service.signup(user).subscribe(
      data=>{
        this.errorMessage=null
        this.successMsg=data.message
        this.successMsg = this.successMsg+" "+"you can proceed to login!";
        this.openDialog(this.successMsg)
        this.router.navigate(['/auth'])
 
      },
      error=>{
        this.successMsg=null
        this.errorMessage=error.error.errorMessage
        this.openDialog(this.errorMessage)
      }
    )
    
  }
}

  validateConfirmPassword(control:AbstractControl){
    console.log("in valiidate")
    if(control.value != this.signupForm.get('password').value){
      return {invalid:true}
    }else{
      return null;
    }

  }

  openDialog(msg){
    this.dialog.open(DialogBoxComponent,{
      width:"500px",
      height:"200px",
      data: msg
    })
   

  }

}
