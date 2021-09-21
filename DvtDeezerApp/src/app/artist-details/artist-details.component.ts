import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../root-services/artist.service';
import { Location } from '@angular/common';
import { IAlbum, IArtist, IArtistTopTracks } from '../shared/types';
@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {

  public topTracks: IArtistTopTracks[] = [];
  public artist: IArtist;
  public albums: IAlbum[] = [];
  public innerWidth: number;
  public artistImg: string;

  constructor(
    private readonly artistService: ArtistService,
    private route: ActivatedRoute,
    private location: Location
    ) {
      this.artistService.Data.subscribe(artist => this.artist = artist);
      this.route.data.subscribe(({topTracks, artist, albums}) => this.mapData(topTracks, artist, albums));
    }

  ngOnInit(): void {
  }

  public mapData(topTracks: IArtistTopTracks[], artist: IArtist, albums: IAlbum[]): void {
    this.topTracks = topTracks;
    this.artist = artist;
    this.albums = albums;
  }

  back() {
    this.location.back();
  }
}
