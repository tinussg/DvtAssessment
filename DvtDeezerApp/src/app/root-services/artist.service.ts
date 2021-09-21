import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { albums, artist, artists, artistTopTracks } from 'src/assets/mock/mock-data';
import { environment } from 'src/environments/environment';
import { IAlbum, IArtist, IArtistTopTracks, IResponse } from '../shared/types';
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

  searchArtist(searchString: string): Observable<IResponse<IArtist[]>> {
    if (environment.enableMock) {
      return of(artists);
    }
    return this.http.get<IResponse<IArtist[]>>(ArtistApi.artistSearch(searchString), {
      params: new HttpParams().set('q', searchString)
    });
  }

  getArtistTopTracks(artistId: number, returnCount: number = 5): Observable<IArtistTopTracks[]> {
    if (environment.enableMock) {
      return of(artistTopTracks.data);
    }
    return this.http.get<IResponse<IArtistTopTracks[]>>(ArtistApi.artistTopTracks(artistId), {
      params: new HttpParams().set('limit', returnCount.toString())
    })
    .pipe(map(a => a.data));
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
    return this.http.get<IResponse<IAlbum[]>>(ArtistApi.albums(artistId))
    .pipe(map(a => a.data));
  }
}
