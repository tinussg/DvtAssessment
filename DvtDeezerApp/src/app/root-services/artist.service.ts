import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { artists } from 'src/assets/mock/mock-data';
import { environment } from 'src/environments/environment';
import { IArtist } from '../shared/types';
import { ArtistApi } from './api';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private readonly http: HttpClient) { }


  searchArtist(searchString: string): Observable<IArtist[]> {
    if (environment.enableMock) {
      return of(artists.data);
    }
    this.http.get<IArtist[]>(ArtistApi.artistSearch(searchString))
  }
}
