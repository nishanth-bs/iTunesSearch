import { Component, OnInit, ViewChild } from '@angular/core';

import { QueryServer } from 'src/app/services/queryServer.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  inputFocus = false;
 // inputFocus: Subject<boolean> = new Subject<boolean>();
  
  @ViewChild('header') private headerEle;

  constructor(private queryServer : QueryServer) {   }

  ngOnInit() {
    //this.inputFocus.next(false);
  }

  onQueryKeyup(queryString : string, enterClicked: boolean){
    if(enterClicked){
      this.queryServer.termChanged.emit(queryString);
    }else{
      if(queryString.length % 4 == 0){
        this.queryServer.termChanged.emit(queryString);
      }
    }
    
  }
  hideSuggestion(){
    this.inputFocus = false;
    console.log(this.inputFocus);
    //this.inputFocus.next(false);
  }
  showSuggestion(){
    setTimeout(()=>this.inputFocus = true,1000);
    console.log(this.inputFocus);
    //this.inputFocus.next(true);
  }

}
