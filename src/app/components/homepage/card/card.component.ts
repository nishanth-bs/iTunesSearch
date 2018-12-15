import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() artworkUrl60 : string;
  @Input() previewUrl : string;
  @Input() trackCensoredName : string;
  @Input() artistName : string;
  @Input() releaseDate : string;
  @Input() primaryGenreName : string;
  @Input() collectionPrice : number;
  @Input() collectionViewUrl : string;
  wordLimit : number = 15;
  constructor() { } 

  ngOnInit() {
  }

}
