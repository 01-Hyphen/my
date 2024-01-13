import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../user.model";
import { transferService } from "../TransferService";

@Injectable({
    providedIn:'root'
})
export class FriendService{

    constructor(private http:HttpClient ,private ser :transferService ){};

    ALL_USERS_URL='http://localhost:8080/LeagueUsers/friend/giveSuggestions/'
    SEND_FRIEND_REQ_URL = 'http://localhost:8080/LeagueUsers/friend/add/'
    GET_TEMP_LIST_URL = 'http://localhost:8080/LeagueUsers/friend/getTempFriendList/'
    CONFIRM_FRIEND_URL = 'http://localhost:8080/LeagueUsers/friend/confirm/'
    REJECT_REQUEST_URL ="http://localhost:8080/LeagueUsers/friend/reject/"
    GET_ALL_FRIENDS = "http://localhost:8080/LeagueUsers/friend/getAll/"
    



    
    users :User[] = []


   

    getFriends(){
        return this.http.get<User[]>(this.GET_ALL_FRIENDS + this.ser.getId())
    }

    getAllUsers(){
       return this.http.get<User[]>(this.ALL_USERS_URL + this.ser.getId())
    }

    sendFriendRequest(receiverId : number,data:any){
        return this.http.post<{message:string}>(this.SEND_FRIEND_REQ_URL + this.ser.getId() +"/"+ receiverId , {} )
    }

    getTempFriends(){
        return this.http.get<any>(this.GET_TEMP_LIST_URL + this.ser.getId())
    }

    confirmFriend(senderFriendId:number,confirmerId:number){
        return this.http.post<{message:string}>(this.CONFIRM_FRIEND_URL+senderFriendId+"/"+confirmerId, null)
        

    }
    rejectRequest(reqFriendId){
        return this.http.delete<{message:string}>(this.REJECT_REQUEST_URL+reqFriendId+"/"+this.ser.getId())
        

    }

}











