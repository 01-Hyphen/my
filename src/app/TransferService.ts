
import { Injectable } from "@angular/core";
import { HttpService } from "./service";
import { LoginComponent } from "./src/app/login/login.component";

@Injectable({
    providedIn:'root'
  })
export class transferService{

    constructor(){}

    id !: number
    valuee !: any

    FriendId !: number


    

    setId(id : number){
      
  
    }
    getId(){
        const obj = window.localStorage.getItem('user')
        if(obj){
    
          this.valuee= JSON.parse(obj)
          // console.log(this.valuee.id)
          this.id = this.valuee.id
    
        }
        return this.id
    }

    setFriendId(FriendId : number){
      this.FriendId = FriendId;
    }

    getFriendId(){
      return this.FriendId;
    }

} 

