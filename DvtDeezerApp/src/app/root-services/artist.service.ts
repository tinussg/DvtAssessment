import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { albums, artist, artists, artistTopTracks } from 'src/assets/mock/mock-data';
import { environment } from 'src/environments/environment';
import { IAlbum, IArtist, IArtistTopTracks } from '../shared/types';
import { ArtistApi } from './api';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private data: BehaviorSubject<IArtist> = new BehaviorSubject<IArtist>(null);

  public get Data(): Observable<IArtist> {
    return this.data.asObservable();
  }

  constructor(private readonly http: HttpClient) { }

  setArtist(artistData: IArtist): void {
    this.data.next(artistData);
  }

  searchArtist(searchString: string): Observable<IArtist[]> {
    if (environment.enableMock) {
      return of(artists.data);
    }
    this.http.get<IArtist[]>(ArtistApi.artistSearch(searchString));
  }

  getArtistTopTracks(artistId: number, returnCount: number = 5): Observable<IArtistTopTracks[]> {
    if (environment.enableMock) {
      return of(artistTopTracks.data);
    }
    this.http.get<IArtistTopTracks[]>(ArtistApi.artistTopTracks(artistId, returnCount));
  }

  getArtist(artistId: number): Observable<IArtist> {
    if (environment.enableMock) {
      return of(artist);
    }
    return this.http.get<IArtist>(ArtistApi.artist(artistId));
  }


  getAlbums(artistId: number): Observable<IAlbum[]> {
    if (environment.enableMock) {
      return of(albums.data);
    }
    return this.http.get<IAlbum[]>(ArtistApi.albums(artistId));
  }
}
