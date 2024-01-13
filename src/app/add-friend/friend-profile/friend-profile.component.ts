import { Component, Input } from '@angular/core';
import { FriendService } from '../friend.service';
import { HttpService } from 'src/app/service';
import { Stocks } from 'src/app/Stock.model';
import { transferService } from 'src/app/TransferService';

@Component({
  selector: 'app-friend-profile',
  templateUrl: './friend-profile.component.html',
  styleUrls: ['./friend-profile.component.css']
})
export class FriendProfileComponent {
  return: any;
  valuee: any;
  portfolio !: Stocks[]
  


  constructor(private service:HttpService, private tSer : transferService){}


  ngOnInit(): void {
    this.fetchPortfolio();
    this.fetchReturn();
    
  }


  
  fetchPortfolio():void {
  
  

    if(this.tSer.getFriendId()){
      this.service.getStocksById(this.tSer.getFriendId()).subscribe(
      
        (Data ) => {
          this.portfolio = Data
         
          // localStorage.setItem('id',this.TransferService.getId().toLocaleString())
        },
        (error) => {
          console.error("Error fetching Portfolio",error);
        }
      )
     
      }

    }
    fetchReturn(){
      this.service.getReturnsById(this.tSer.getFriendId()).subscribe(
      
        (Data)=>{
       
          this.return = Data
       
      })
  
    }


 



  
}
