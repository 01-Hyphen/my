import { Component } from '@angular/core';
import { HttpService } from '../service';
import { Stocks } from '../Stock.model';
import { transferService } from '../TransferService';
import { User } from '../user.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog/dialog-box/dialog-box.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  portfolio !: Stocks[]
  id !: any
  return !: any
  valuee !:any

  constructor(private dialog:MatDialog, private service:HttpService,private TransferService : transferService){}


  ngOnInit(): void {
    this.fetchPortfolio();
    this.fetchReturn();
  
  }

  fetchPortfolio():void {
  
   

    if(this.TransferService.getId()){
      this.service.getStocksById(this.TransferService.getId()).subscribe(
      
        (Data ) => {
          this.portfolio = Data
          console.log
          console.log(Data)
          // localStorage.setItem('id',this.TransferService.getId().toLocaleString())
        },
        (error) => {
          console.error("Error fetching Portfolio",error);
        }
      )
     
      }

    }
    
  Remove(i:number){

   let id =this.portfolio[i].id
   console.log(id)
   this.service.remodeStockBySymbol(id,this.TransferService.getId()).subscribe(
    (data) => {
      this.portfolio = data
      let msg = "Stock has been deleted successfully";
      this.openDialog(msg);
    }
   )
   this.fetchPortfolio();
   this.fetchReturn();
  }


  fetchReturn(){
    this.service.getReturnsById(this.TransferService.getId()).subscribe(
      (Data)=>{
        this.return = Data

        window.localStorage.setItem('return',this.return);
    })

  }
  openDialog(msg){
    this.dialog.open(DialogBoxComponent,{
      width:"500px",
      height:"200px",
      data: msg
    })
  }
  }


