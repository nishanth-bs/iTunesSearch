import { Component, OnInit } from '@angular/core';
import { QueryServer } from 'src/app/services/queryServer.service';

@Component({
  selector: 'app-inputsuggestions',
  templateUrl: './inputsuggestions.component.html',
  styleUrls: ['./inputsuggestions.component.scss']
})
export class InputsuggestionsComponent implements OnInit {
  data:any;
  term: string;
  constructor(private queryServer: QueryServer) { }

  ngOnInit() {
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

}
