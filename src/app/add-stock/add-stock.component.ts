import { Component, OnInit } from '@angular/core';
import { transferService } from '../TransferService';
import { HttpService } from '../service';
import { Stocks } from '../Stock.model';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog/dialog-box/dialog-box.component';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  constructor(private dialog:MatDialog, private service : HttpService,private Fb:FormBuilder , private TransferService: transferService, private router:Router,private route : ActivatedRoute){}

 showSpinner = false;
  addForm !:any;
  errorMsg !: string|null
  successMsg!:string|null
  Stocklist : string[]=          ["360ONE", "3MINDIA", "ABB", "ACC", "AIAENG", "APLAPOLLO", "AUBANK", "AARTIDRUGS", "AARTIIND", "AAVAS", "ABBOTINDIA",
                                  "ADANIENSOL", "ADANIENT", "ADANIGREEN", "ADANIPORTS", "ADANIPOWER", "ATGL", "AWL", "ABCAPITAL", "ABFRL",
                                  "AEGISCHEM", "AETHER", "AFFLE", "AJANTPHARM", "APLLTD", "ALKEM", "ALKYLAMINE", "AMARAJABAT", "AMBER", "AMBUJACEM", 
                                  "ANGELONE", "ANURAS", "APARINDS", "APOLLOHOSP", "APOLLOTYRE", "APTUS", "ACI", "ASAHIINDIA", "ASHOKLEY", "ASIANPAINT",
                                  "ASTERDM", "ASTRAL", "ATUL", "AUROPHARMA", "AVANTIFEED", "DMART", "AXISBANK", "BASF", "BEML", "BLS", "BSE", 
                                  "BAJAJ-AUTO", "BAJFINANCE", "BAJAJFINSV", "BAJAJHLDNG", "BALAMINES", "BALKRISIND", "BALRAMCHIN", "BANDHANBNK",
                                  "BANKBARODA", "BANKINDIA", "MAHABANK", "BATAINDIA", "BAYERCROP", "BERGEPAINT", "BDL", "BEL", "BHARATFORG", "BHEL", "BPCL",
                                  "BHARTIARTL", "BIKAJI", "BIOCON", "BIRLACORPN", "BSOFT", "BLUEDART", "BLUESTARCO", "BBTC", "BORORENEW", "BOSCHLTD", "BRIGADE", 
                                  "BCG", "BRITANNIA", "MAPMYINDIA", "CCL", "CESC", "CGPOWER", "CIEINDIA", "CRISIL", "CSBBANK", "CAMPUS", "CANFINHOME", "CANBK", "CGCL",
                                  "CARBORUNIV", "CASTROLIND", "CEATLTD", "CENTRALBK", "CDSL", "CENTURYPLY", "CENTURYTEX", "CERA", "CHALET", "CHAMBLFERT", "CHEMPLASTS"
                                 ,"CHOLAHLDNG", "CHOLAFIN", "CIPLA", "CUB", "CLEAN", "COALINDIA", "COCHINSHIP", "COFORGE", "COLPAL", "CAMS", "CONCOR", "COROMANDEL", 
                                  "CRAFTSMAN", "CREDITACC", "CROMPTON", "CUMMINSIND", "CYIENT", "DCMSHRIRAM", "DLF", "DABUR", "DALBHARAT", "DATAPATTNS", "DEEPAKFERT", "DEEPAKNTR",
                                  "DELHIVERY", "DELTACORP", "DEVYANI", "DIVISLAB", "DIXON", "LALPATHLAB", "DRREDDY", "EIDPARRY", "EIHOTEL", "EPL", "EASEMYTRIP", 
                                  "EICHERMOT", "ELGIEQUIP", "EMAMILTD", "ENDURANCE", "ENGINERSIN", "EQUITASBNK", "ERIS", "ESCORTS", "EXIDEIND", "FDC", "NYKAA", "FEDERALBNK",  
                                  "FACT", "FINEORG", "FINCABLES", "FINPIPE", "FSL", "FIVESTAR", "FORTIS", "GRINFRA", "GAIL", "GMMPFAUDLR", "GMRINFRA", "GALAXYSURF", "GARFIBRES", 
                                  "GICRE", "GLAND", "GLAXO", "GLENMARK", "MEDANTA", "GOCOLORS", "GODFRYPHLP", "GODREJAGRO", "GODREJCP","TATAPOWER", "GODREJIND", "GODREJPROP", "GRANULES", 
                                  "GRAPHITE", "GRASIM", "GESHIP", "GREENPANEL", "GRINDWELL", "GUJALKALI", "GAEL", "FLUOROCHEM", "GUJGASLTD", "GNFC", "GPPL", "GSFC", "GSPL", "HEG",
                                  "HCLTECH", "HDFCAMC", "HDFCBANK", "HDFCLIFE", "HFCL", "HLEGLAS", "HAPPSTMNDS", "HAVELLS", "HEROMOTOCO", "HIKAL", "HINDALCO", "HGS", "HAL", 
                                  "HINDCOPPER", "HINDPETRO", "HINDUNILVR", "HINDZINC", "POWERINDIA", "HOMEFIRST", "HONAUT", "HUDCO", "ICICIBANK", "ICICIGI", "ICICIPRULI", "ISEC", 
                                  "IDBI", "IDFCFIRSTB", "IDFC", "IFBIND", "IIFL", "IRB", "ITC", "ITI", "INDIACEM", "IBULHSGFIN", "IBREALEST", "INDIAMART", "INDIANB", "IEX", "INDHOTEL", 
                                  "IOC", "IOB", "IRCTC", "IRFC", "INDIGOPNTS", "IGL", "INDUSTOWER", "INDUSINDBK", "INFIBEAM", "NAUKRI", "INFY", "INGERRAND", "INTELLECT", "INDIGO", 
                                  "IPCALAB", "JBCHEPHARM", "JKCEMENT", "JBMA", "JKLAKSHMI", "JKPAPER", "JMFINANCIL", "JSWENERGY", "JSWSTEEL", "JAMNAAUTO", "JSL", "JINDALSTEL", 
                                  "JINDWORLD", "JUBLFOOD", "JUBLINGREA", "JUBLPHARMA", "JUSTDIAL", "JYOTHYLAB", "KPRMILL", "KEI", "KNRCON", "KPITTECH", "KRBL", "KSB", "KAJARIACER",
                                   "KPIL", "KALYANKJIL", "KANSAINER", "KARURVYSYA", "KEC", "KENNAMET", "RUSTOMJEE", "KFINTECH", "KOTAKBANK", "KIMS"];
                                   
  selectedStock:string ='';
  Stock:string ='';
  Bool:Boolean=true;
  a :String='';
  buyPrice!:number
  description:string=''


  ngOnInit(){
    console.log(this.TransferService.getId())
  
  }

  onClick(stock:any){
    console.log(stock)
    this.selectedStock = stock
    
    this.a=this.Stock
    if(this.Stocklist.includes(this.selectedStock) ){
      this.Bool =false
      console.log(this.Bool)
    }
  }
  onChange(Stock:any){
    this.selectedStock = this.Stock
    this.Bool =true;
  }

  
  addStock(){
    this.showSpinner = true;
    if(this.showSpinner){
      document.querySelector<HTMLElement>(".form").style.visibility = "hidden"
    }
    let sto = new Stocks()

    sto.symbol = this.selectedStock
    console.log(sto.symbol)
    sto.buyPrice = this.buyPrice
    sto.description= this.description
    console.log(sto.buyPrice,"    ",sto.description)

    this.service.addStockById(sto,this.TransferService.getId()).subscribe(
   
      data  => {
        

        this.errorMsg=null;
        this.successMsg = data.message
        this.showSpinner = false;
        this.openDialog(this.successMsg);
        // alert( this.successMsg)
        this.router.navigate(['home/portfolio'])

      },
      error => {
        this.successMsg = null
        this.errorMsg = error.error.errorMessage
        this.showSpinner = false;
        // alert( this.errorMsg)
        document.querySelector<HTMLElement>(".form").style.visibility = "visible"
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
