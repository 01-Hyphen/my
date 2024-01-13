import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FriendService } from '../add-friend/friend.service';
import { HttpService } from '../service';
import { transferService } from '../TransferService';



@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaderBoardComponent {
  
 

  constructor(private ser : HttpService,private tSer :transferService){}

  
  dataArray: { key: string; value: unknown; }[];
  

  // list:{"name":string, "return":number} []=[]
  ngOnInit(){
    
    this.ser.getLeagderBoardById(this.tSer.getId()).subscribe(
      (data :any=new Map)=> {
        this.dataArray = Object.entries(data).map(([key, value]) => ({ key, value }));
  
          }
    )
 

      
    

  }
}
  

