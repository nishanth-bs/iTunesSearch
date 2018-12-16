import { Component, OnInit, Input } from '@angular/core';
import { ResultpageCardDetail } from 'src/app/shared/resultpage-card-detail';
import { playAudio } from 'src/app/services/playAudio';

@Component({
  selector: 'app-searchitemcard',
  templateUrl: './searchitemcard.component.html',
  styleUrls: ['./searchitemcard.component.scss']
})
export class SearchitemcardComponent implements OnInit {

  @Input() artworkUrl60 : string;
  @Input() previewUrl : string;
  @Input() trackCensoredName : string;
  @Input() artistName : string;
  @Input() releaseDate : string;
  @Input() primaryGenreName : string;
  @Input() collectionPrice : string;
  @Input() collectionViewUrl : string;
  @Input() data : ResultpageCardDetail[];
  wordLimit = 30;
  constructor(private playAudio: playAudio) { }

  ngOnInit() {
  }
  playThis(url: string){
    this.playAudio.setUrl(url);
  }

}
