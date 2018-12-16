import { Component, OnInit, Input } from '@angular/core';
import { QueryServer } from 'src/app/services/queryServer.service';
import { InputSuggestions } from 'src/app/shared/inputSuggestions';
import { HeaderComponent } from '../header.component';

@Component({
  selector: 'app-inputsuggestions',
  templateUrl: './inputsuggestions.component.html',
  styleUrls: ['./inputsuggestions.component.scss']
})
export class InputsuggestionsComponent implements OnInit {
  songData:InputSuggestions[] = [];
  albumData:InputSuggestions[] = [];
  composerData:InputSuggestions[] = [];
  artistData:InputSuggestions[] = [];
  term: string;
  @Input() suggestionBox:boolean;
  constructor(private queryServer: QueryServer,private sugg: HeaderComponent) { }

  ngOnInit() {
    /*this.sugg.inputFocus.subscribe(e=>{
      this.suggestionBox = e;
      console.log("asdfadsfa"+this.suggestionBox);
    });*/
    this.queryServer.termChanged.subscribe(
      (term: string)=>{
          this.queryServer.getSearchResults(term,5).subscribe(
            (response: Response)=>{
              this.songData = [];
              let b:InputSuggestions;
              response['results'].forEach(element => {
                console.log(response);
                b = {
                trackCensoredName :element['trackCensoredName'],
                artistName : element['artworkUrl60']
              }
              this.songData = this.songData.concat(b);
              });
              
              console.log(this.songData);
            }
          )
      }
    );
    
    this.queryServer.termChanged.subscribe(
      (term: string)=>{
          this.queryServer.getArtistResults(term,5).subscribe(
            (response: Response)=>{
              this.artistData = [];
              let b:InputSuggestions;
              response['results'].forEach(element => {
                //console.log(response);
                b = {
                trackCensoredName :element['trackCensoredName'],
                artistName : element['artworkUrl60']
              }
              this.artistData = this.artistData.concat(b);
              });
              
             // console.log(this.artistData);
            }
          )
      }
    );

    this.queryServer.termChanged.subscribe(
      (term: string)=>{
          this.queryServer.getComposerResults(term,5).subscribe(
            (response: Response)=>{
              this.composerData = [];
              let b:InputSuggestions;
              response['results'].forEach(element => {
              //  console.log(response);
                b = {
                trackCensoredName :element['trackCensoredName'],
                artistName : element['artworkUrl60']
              }
              this.composerData = this.composerData.concat(b);
              });
              
              //console.log(this.composerData);
            }
          )
      }
    );

    this.queryServer.termChanged.subscribe(
      (term: string)=>{
          this.queryServer.getAlbumResults(term,5).subscribe(
            (response: Response)=>{
              this.albumData = [];
              let b:InputSuggestions;
              response['results'].forEach(element => {
                console.log("ele");
                console.log(element);
                b = {
                trackCensoredName :element['trackCensoredName'],
                artistName : element['artworkUrl60']
              }
              this.albumData = this.albumData.concat(b);
              });
              
              console.log(this.albumData);
            }
          )
      }
    );
  }

}
