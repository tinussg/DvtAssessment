import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { artist, artists, artistTopTracks } from 'src/assets/mock/mock-data';
import { environment } from 'src/environments/environment';
import { IArtist, IArtistTopTracks } from '../shared/types';
import { ArtistApi } from './api';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private data: BehaviorSubject<IArtist> = new BehaviorSubject<IArtist>(null);

  public get Data(): Observable<IArtist>{
    return this.data.asObservable();
  }

  constructor(private readonly http: HttpClient) { }

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
}
