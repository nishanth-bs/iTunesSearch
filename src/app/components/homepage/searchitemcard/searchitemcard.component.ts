import { Component, OnInit, Input } from '@angular/core';
import { ResultpageCardDetail } from 'src/app/shared/resultpage-card-detail';

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
  constructor() { }

  ngOnInit() {
  }

}
