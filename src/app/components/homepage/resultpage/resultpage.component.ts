import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QueryServer } from 'src/app/services/queryServer.service';
import { InputSuggestions } from 'src/app/shared/inputSuggestions';
import { ResultpageCardDetail } from 'src/app/shared/resultpage-card-detail';

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.scss']
})
export class ResultpageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private queryServer: QueryServer) { }
  inputArg :string;
  inputArgType : string;
  songData:ResultpageCardDetail[] = [];
  albumData:ResultpageCardDetail[] = [];
  composerData:ResultpageCardDetail[] = [];
  artistData:ResultpageCardDetail[] = [];
  term: string = this.inputArg;
  pic:string;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.inputArg = params['name'];
      this.inputArgType = params['category'];
      this.term = this.inputArg;
      //console.log(this.inputArg, this.inputArgType);
      this.queryServer.getSearchResults(this.term,10).subscribe(
        (response: Response)=>{
          this.songData = [];
          let b:ResultpageCardDetail;
          console.log("RESEEEEEEE"+response['results']);
          response['results'].forEach(element => {
            
            console.log(element);
            this.pic = element['artworkUrl60'];
            this.pic = [this.pic.slice(0,this.pic.indexOf('60x60bb.jpg')),'600x600bb.jpg'].join('');
            b = {
              artworkUrl60 : this.pic,
              previewUrl : element['previewUrl'],
              trackCensoredName :element['trackCensoredName'],
              artistName : element['artistName'],
              releaseDate : element['releaseDate'],
              primaryGenreName : element['primaryGenreName'],
              collectionPrice : element['collectionPrice'],
              collectionViewUrl : element['collectionViewUrl']
          }
          this.songData = this.songData.concat(b);
          });
          
          console.log(this.songData);
        }
      );
        
      this.queryServer.getArtistResults(this.term,10).subscribe(
        (response: Response)=>{
          this.artistData = [];
          let b:ResultpageCardDetail;
          response['results'].forEach(element => {
            //console.log(response);
            this.pic = element['artworkUrl60'];
            this.pic = [this.pic.slice(0,this.pic.indexOf('60x60bb.jpg')),'600x600bb.jpg'].join('');
              b = {
              artworkUrl60 : this.pic,
              previewUrl : element['previewUrl'],
              trackCensoredName :element['trackCensoredName'],
              artistName : element['artistName'],
              releaseDate : element['releaseDate'],
              primaryGenreName : element['primaryGenreName'],
              collectionPrice : element['collectionPrice'],
              collectionViewUrl : element['collectionViewUrl']
          }
          this.artistData = this.artistData.concat(b);
          });
          
          // console.log(this.artistData);
        }
      );
  
      this.queryServer.getComposerResults(this.term,10).subscribe(
        (response: Response)=>{
          this.composerData = [];
          let b:ResultpageCardDetail;
          response['results'].forEach(element => {
          //  console.log(response);
            this.pic = element['artworkUrl60'];
            this.pic = [this.pic.slice(0,this.pic.indexOf('60x60bb.jpg')),'600x600bb.jpg'].join('');
          b = {
            artworkUrl60 : this.pic,
            previewUrl : element['previewUrl'],
            trackCensoredName :element['trackCensoredName'],
            artistName : element['artistName'],
            releaseDate : element['releaseDate'],
            primaryGenreName : element['primaryGenreName'],
            collectionPrice : element['collectionPrice'],
            collectionViewUrl : element['collectionViewUrl']
        }
          this.composerData = this.composerData.concat(b);
          });
          
          //console.log(this.composerData);
        }
      );
  
      this.queryServer.getAlbumResults(this.term,10).subscribe(
        (response: Response)=>{
          this.albumData = [];
          let b:ResultpageCardDetail;
          response['results'].forEach(element => {
            console.log("ele");
            console.log(element);
            this.pic = element['artworkUrl60'];
            this.pic = [this.pic.slice(0,this.pic.indexOf('60x60bb.jpg')),'600x600bb.jpg'].join('');
            b = {
              artworkUrl60 : this.pic,
              previewUrl : element['previewUrl'],
              trackCensoredName :element['trackCensoredName'],
              artistName : element['artistName'],
              releaseDate : element['releaseDate'],
              primaryGenreName : element['primaryGenreName'],
              collectionPrice : element['collectionPrice'],
              collectionViewUrl : element['collectionViewUrl']
          }
          this.albumData = this.albumData.concat(b);
          });
          
          console.log(this.albumData);
        }
      );
    });

    
    
  }
}
