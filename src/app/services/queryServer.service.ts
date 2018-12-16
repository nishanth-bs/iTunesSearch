import { Observable,of, Subject } from 'rxjs';
import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QueryServer{
    //term = new Subject<string>();
    termChanged = new EventEmitter<string>();

    constructor(private http: HttpClient){}
    

    getSearchResults(term : string, limit:number){
        //console.log('https://itunes.apple.com/api/search?term='+this.termString);
        //console.log(this.termString);
        let url: string;// = "https://itunes.apple.com/search?term=modi";
        if(term !== ''){
            url  = 'https://itunes.apple.com/search?country=in&media=music&entity=musicTrack&attribute=songTerm&limit='+limit+'&term='+term;    
        }else{
            //use weird keyword which returns empty result 
            //purpose: the subscriber function shouldn't stop
            url  = 'https://itunes.apple.com/search?country=in&media=music&entity=musicTrack&attribute=songTerm&limit='+limit+'&term=zzqwpoawzyiwa';
        }
        //let url : string = 'https://itunes.apple.com/search?term='+term;
        return this.http.get(url);//api/search?term='+this.termString);
    }

    getArtistResults(term:string,limit:number){
        let url :  string;
        if(term !== ''){
            url  = "https://itunes.apple.com/search?country=in&entity=musicTrack&attribute=artistTerm&limit="+limit+"&term="+term;
        }else{
            url  = 'https://itunes.apple.com/search?country=in&entity=musicTrack&attribute=artistTerm&limit='+limit+'&term=zzqwpoawzyiwa';
        }
        return this.http.get(url);
    }
    getComposerResults(term:string,limit:number){
        let url :  string;
        if(term !== ''){
            url  = "https://itunes.apple.com/search?country=in&entity=musicTrack&attribute=composerTerm&limit="+limit+"&term="+term;
        }else{
            url  = 'https://itunes.apple.com/search?country=in&entity=musicTrack&attribute=composerTerm&limit='+limit+'&term=zzqwpoawzyiwa';
        }
        return this.http.get(url);
    }
    getAlbumResults(term:string,limit:number){
        let url :  string;
        if(term !== ''){
            url  = "https://itunes.apple.com/search?country=in&entity=musicTrack&attribute=albumTerm&limit="+limit+"&term="+term;
             "https://itunes.apple.com/search?country=in&entity=musicTrack&attribute=albumTerm&limit="+limit+"&term="+term;
        }else{
            url  = 'https://itunes.apple.com/search?country=in&entity=musicTrack&attribute=albumTerm&limit='+limit+'&term=zzqwpoawzyiwa';
        }
        return this.http.get(url);
    }
}