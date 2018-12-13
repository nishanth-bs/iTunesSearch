import { Observable,of, Subject } from 'rxjs';
import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QueryServer{
    //term = new Subject<string>();
    termChanged = new EventEmitter<string>();

    constructor(private http: HttpClient){}

    getSearchResults(term : string){
        //console.log('https://itunes.apple.com/api/search?term='+this.termString);
        //console.log(this.termString);
        let url: string = "https://itunes.apple.com/search?term=modi";
        if(term !== ''){
            url  = 'https://itunes.apple.com/search?term='+term;    
        }else{
            term = "rahul";
        }
        //let url : string = 'https://itunes.apple.com/search?term='+term;
        return this.http.get(url);//api/search?term='+this.termString);
    }
}