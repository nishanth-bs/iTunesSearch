import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() thumbnail: string;
  @Input() name: string;
  @Input() artistName:string;
  @Input() releaseDate:string;
  @Input() genre: string;
  /*@Input() artworkUrl60 : string;
  @Input() previewUrl : string;
  @Input() trackCensoredName : string;
  @Input() artistName : string;
  @Input() releaseDate : string;
  @Input() primaryGenreName : string;
  @Input() collectionPrice : number;
  @Input() collectionViewUrl : string;*/
  
  //processedName = this.processString(this.name);
  //processedArtistName= this.processString(this.artistName);
  wordLimit : number = 30;
  constructor() { } 
  ngOnInit() {
  }

  
  processString(str:string){
    if(str.length > this.wordLimit){
      let a = str.split(' ');
      let b = [];
      let count = 0;
      a.forEach(word => {
        count += word.length;
        if(count > this.wordLimit-3){
          let c :string = `${b.join(' ')}...`;
          console.log(c);
          return c;
        }
        b = b.concat(word);
      });
    }else{
      console.log(str);
      return str;
    }
    
  }

}
