import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { Stocks } from "./Stock.model";
import { transferService } from "./TransferService";

@Injectable({
    providedIn:'root'
})
export class HttpService{

    constructor(private http:HttpClient , private tSer : transferService){}
    isLogin:string="NO";
    

    LOGIN_URL='http://localhost:8080/LeagueUsers/api/User/loginuser';
    SIGNUP_URL='http://localhost:8080/LeagueUsers/api/User/save';
    GETUSERDATA_URL='http://localhost:8080/LeagueUsers/api/User/';
    UPDATEUSER_URL='http://localhost:8080/LeagueUsers/api/User/update/'
    USERDATABYEMAIL_URL ='http://localhost:8080/LeagueUsers/api/User/byEmail/';
    STOCKSBYID_URL = 'http://localhost:8080/LeagueUsers/api/User/allStocks/';
    ADDSTOCKBYID_URL = 'http://localhost:8080/LeagueUsers/api/User/add/';
    DELETESTOCKBYSYMBOL_URL = 'http://localhost:8080/LeagueUsers/api/User/delete/';
    GETRETURNSBYID_URL = 'http://localhost:8080/LeagueUsers/api/User/ReturnsOf/';
    GER_LEADER_BOARD_URL = 'http://localhost:8080/LeagueUsers/api/User/leaderBoard/'

    u !:User

    login(data:any){
        return this.http.post<User>(this.LOGIN_URL,data);
    }

    signup(data:any){
        return this.http.post<{message:string}>(this.SIGNUP_URL,data)
    }

    getUserData(userId:number){
        return this.http.get<User>(this.GETUSERDATA_URL + userId)
    }

    updateUserData(updateUser : any,userId :number){
        // console.log(updateUser)
        // console.log(userId+1)
        return this.http.put(this.UPDATEUSER_URL + userId,updateUser  )

    }
    getUserByEmail(email : String){
        return this.http.get(this.USERDATABYEMAIL_URL + email)
    }

    getStocksById(id :number){
        // console.log(this.http.get<Stocks[]>('http://localhost:8080/LeagueUsers/api/User/allStocks/'+id))
        // console.log(id+"in service")
        return this.http.get<Stocks[]>('http://localhost:8080/LeagueUsers/api/User/allStocks/'+id)
    }

    addStockById(stock:any ,userId:number){
        return this.http.post<{message:string}>(this.ADDSTOCKBYID_URL + userId,stock)
    }
    
    remodeStockBySymbol(stockId:number, userId :number){
        console.log("in the service.ts")
        return this.http.delete<Stocks[]>(this.DELETESTOCKBYSYMBOL_URL + stockId +"/"+userId);
    }
    
    getReturnsById(userId:number){
        return this.http.get(this.GETRETURNSBYID_URL + userId)
    }

    getLeagderBoardById(userId:number){
        return this.http.get<Map<string,string>>(this.GER_LEADER_BOARD_URL+(this.tSer.getId()))
    }

    

    


}



