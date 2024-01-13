import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { HttpService } from "src/app/service";

@Injectable({
    providedIn:'root'
})
export class LoginAuthGaurd implements CanActivate{

    constructor(private service:HttpService,private router:Router ){
        
    }

    canActivate(route:ActivatedRouteSnapshot,
                state:RouterStateSnapshot){
                    // console.log(this.service.isLogin)
                    if(localStorage.getItem("login")== "YES"){
                        localStorage.removeItem("login");
                        return true
                    }
                    else{
                        // console.log("in else")
                        console.log(this.service.isLogin)
                    return this.router.createUrlTree(['/auth'])
                    }

    }

}
