import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomepageCardDetail } from '../shared/homepage-card-detail';

@Injectable()
export class Top10Genre{
    iTunesHotTracks = "/rssapi/api/v1/in/itunes-music/hot-tracks/all/10/explicit.json";
    iTunesRecent = "/rssapi/api/v1/in/itunes-music/recent-releases/all/10/explicit.json";
    iTunesNew = "/rssapi/api/v1/in/itunes-music/new-music/all/10/explicit.json";
    iTunes = "/rssapi/api/v1/in/itunes-music/top-songs/all/8/explicit.json";
    iTunesTopAlbums = "/rssapi/api/v1/in/itunes-music/top-albums/all/10/explicit.json";

    iOSApps = "/rssapi/api/v1/in/ios-apps/new-apps-we-love/all/10/explicit.json";
    iOSGames = "/rssapi/api/v1/in/ios-apps/new-games-we-love/all/10/explicit.json";
    macAppsFree= "/rssapi/api/v1/in/macos-apps/top-free-mac-apps/all/10/explicit.json";
    macAppsTopGrossing = "/rssapi/api/v1/in/macos-apps/top-grossing-mac-apps/all/10/explicit.json";
    moviesTop = "/rssapi/api/v1/in/movies/top-movies/all/10/explicit.json";
    booksTop = "/rssapi/api/v1/in/books/top-free/all/10/explicit.json";
    podcastsTop = "/rssapi/api/v1/in/podcasts/top-podcasts/all/10/explicit.json";
    //"https://itunes.apple.com/in/rss/toppodcasts/limit=10/explicit=true/json";
    //"https://rss.itunes.apple.com/api/v1/in/podcasts/top-podcasts/all/10/explicit.json";
    musicVideosTop = "/rssapi/api/v1/in/music-videos/top-music-videos/all/10/explicit.json";
    //"https://itunes.apple.com/in/rss/topmusicvideos/limit=10/explicit=true/json";
    //"https://rss.itunes.apple.com/api/v1/in/music-videos/top-music-videos/all/10/explicit.json";

    constructor(private http: HttpClient){}
    
   // response;
    getTopiTunes(){
        //let iTunes= "https://itunes.apple.com/in/rss/topfreebooks/limit=10/explicit=true/json";
        return this.http.get(this.iTunes);
    }
    getHotTracks(){
        return this.http.get(this.iTunesHotTracks);
    }
    getRecentReleases(){
        return this.http.get(this.iTunesRecent);
    }
    getNewMusic(){
        return this.http.get(this.iTunesNew);
    }
    getTopAlbums(){
        return this.http.get(this.iTunesTopAlbums);
    }
}