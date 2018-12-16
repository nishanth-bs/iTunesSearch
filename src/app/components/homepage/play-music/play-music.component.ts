import { Component, OnInit, Input } from '@angular/core';
import { playAudio } from 'src/app/services/playAudio';

@Component({
  selector: 'app-play-music',
  templateUrl: './play-music.component.html',
  styleUrls: ['./play-music.component.scss']
})
export class PlayMusicComponent implements OnInit {

  constructor(private playAudio: playAudio) { }
  url : string ;
  ngOnInit() {
    this.playAudio.urlTerm.subscribe(res=>{
      this.url = res;
      console.log(this.url);
    });
  }


}
