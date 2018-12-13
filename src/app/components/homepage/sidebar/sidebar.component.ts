import { Component, OnInit } from '@angular/core';

import { QueryServer } from 'src/app/services/queryServer.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private queryTerm : string;
  constructor(private queryServer: QueryServer) { }
  data :any;
  term: string;
  ngOnInit() {
    //this.queryTerm =
     //this.queryServer.term.subscribe((response: Response) =>  {
      // console.log(response)} ,(error)=>{console.log(error)});
      
      /*this.queryServer.showlfasdfkj.subscribe(
        (respone: Response)=>{
            this.data = respone['results'];
            console.log(this.data);
        }
    );  */  
    this.queryServer.termChanged.subscribe(
      (term: string)=>{
          this.queryServer.getSearchResults(term).subscribe(
            (respone: Response)=>{
              this.data = respone['results'];
              console.log(this.data);
            }
          )
      }
    );  
  }
  show(){

  }
  

}
