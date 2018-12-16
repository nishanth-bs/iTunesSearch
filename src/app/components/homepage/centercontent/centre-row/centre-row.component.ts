import { Component, OnInit } from '@angular/core';
import { Top10Genre } from 'src/app/services/top10genre.service';
import { HomepageCardDetail } from 'src/app/shared/homepage-card-detail';

@Component({
  selector: 'app-centre-row',
  templateUrl: './centre-row.component.html',
  styleUrls: ['./centre-row.component.scss']
})
export class CentreRowComponent implements OnInit {
  topSongsResponse : HomepageCardDetail[]=[];
  hotTracksResponse : HomepageCardDetail[] = [];
  recentReleasesResponse: HomepageCardDetail[] = [];
  newMusicResponse: HomepageCardDetail[] = [];
  topAlbumsResponse: HomepageCardDetail[] =[];
  wordLimit = 30;
  constructor(private top10 : Top10Genre) { }
  
  ngOnInit() {
    /*this.top10.getTopiTunes().subscribe(response => {
      console.log(response);
      response['feed']['results'].forEach(element => {
        let b= {
          artworkUrl60: element['artworkUrl60'],
          previewUrl: element['previewUrl'],
          trackCensoredName:element['trackCensoredName'],
          artistName:element['artistName'],
          releaseDate:element['releaseDate'],
          collectionPrice:element['collectionPrice'],
          collectionViewUrl:element['collectionViewUrl'],
          primaryGenreName: element['primaryGenreName']
        };
        this.topSongsResponse = this.topSongsResponse.concat(b);
        console.log(this.topSongsResponse);
      });
    });*/
    this.top10.getHotTracks().subscribe(response => {
      console.log(response);
      response['feed']['results'].forEach(element => {
        let b= {
          thumbnail: element['artworkUrl100'],
          name: element['name'],
          artistName:element['artistName'],
          releaseDate:element['releaseDate'],
          genre: element['genres'][0]['name']
        };
        this.hotTracksResponse = this.hotTracksResponse.concat(b);
        console.log(this.hotTracksResponse);
      });
    });
    
    this.top10.getRecentReleases().subscribe(response => {
      response['feed']['results'].forEach(element => {
        let b= {
          thumbnail: element['artworkUrl100'],
          name: element['name'],
          artistName:element['artistName'],
          releaseDate:element['releaseDate'],
          genre: element['genres'][0]['name']
        };
        this.recentReleasesResponse = this.recentReleasesResponse.concat(b);
        console.log(this.recentReleasesResponse);
      });
    });
    this.top10.getNewMusic().subscribe(response => {
      response['feed']['results'].forEach(element => {
        let b= {
          thumbnail: element['artworkUrl100'],
          name: element['name'],
          artistName:element['artistName'],
          releaseDate:element['releaseDate'],
          genre: element['genres'][0]['name']
        };
        this.newMusicResponse = this.newMusicResponse.concat(b);
        console.log(this.newMusicResponse);
      });
    });
    this.top10.getTopAlbums().subscribe(response => {
      response['feed']['results'].forEach(element => {
        let b= {
          thumbnail: element['artworkUrl100'],
          name: element['name'],
          artistName:element['artistName'],
          releaseDate:element['releaseDate'],
          genre: element['genres'][0]['name']
        };
        this.topAlbumsResponse = this.topAlbumsResponse.concat(b);
        console.log(this.topAlbumsResponse);
      });
    });
  }

}
