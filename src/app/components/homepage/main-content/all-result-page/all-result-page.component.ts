import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QueryServer } from 'src/app/services/queryServer.service';
import { ResultpageCardDetail } from 'src/app/shared/resultpage-card-detail';

@Component({
  selector: 'app-all-result-page',
  templateUrl: './all-result-page.component.html',
  styleUrls: ['./all-result-page.component.scss']
})
export class AllResultPageComponent implements OnInit {
  overallData: ResultpageCardDetail[];
  inputArg :string;
  inputArgType : string;
  songData:ResultpageCardDetail[] = [];
  albumData:ResultpageCardDetail[] = [];
  composerData:ResultpageCardDetail[] = [];
  artistData:ResultpageCardDetail[] = [];
  term: string = this.inputArg;
  pic:string;
  showAll:boolean = false;
  type : string;
  
  constructor(private activatedRoute: ActivatedRoute, private queryServer: QueryServer) { }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params)=>{
      //this.inputArg = params['name'];
      //this.inputArgType = params['category'];
      console.log(params);
      if(params['type']){
        this.type = params['type'];
        console.log(this.type,"asdfffffffffff")
        this.showAll = true;
      }else{
        this.showAll =false;
      }

      this.queryServer.getoverallResults("bunny",50,this.type).subscribe(
        (response: Response)=>{
        this.overallData = [];
        let b:ResultpageCardDetail;
        response['results'].forEach(element => {
          //console.log("ele");
          //console.log(element);
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
        this.overallData = this.overallData.concat(b);
        });
        
        console.log(this.overallData);
      }
    );
  
    }
    );
  }

}
