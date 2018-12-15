import { Component, OnInit, ViewChild } from '@angular/core';

import { QueryServer } from 'src/app/services/queryServer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @ViewChild('header') private headerEle;

  constructor(private queryServer : QueryServer) {   }

  ngOnInit() {
    
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
  
}
