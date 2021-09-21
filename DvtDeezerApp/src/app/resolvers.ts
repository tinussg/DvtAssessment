import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ArtistService } from './root-services/artist.service';
import { IAlbum, IArtist, IArtistTopTracks } from './shared/types';

@Injectable()
export class GetArtistDetailsResolver implements Resolve<IArtistTopTracks[]> {

  constructor(private readonly artistService: ArtistService) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<IArtistTopTracks[]> {
    const artistId = route.params.id;

    if (!artistId)
      return of(null);

    return this.artistService.getArtistTopTracks(artistId);
  }

}

@Injectable()
export class GetArtistResolver implements Resolve<IArtist> {

  constructor(private readonly artistService: ArtistService,
  ) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<IArtist> {
    const artistId = route.params.id;

    if (!artistId)
      return of(null);

    let artist: IArtist;
    this.artistService.Data.subscribe(art => artist = art);

    if (!artist)
    {
      return this.artistService.getArtist(artistId);
    } else {
      return of(artist);
    }
  }

}

@Injectable()
export class GetAlbumResolver implements Resolve<IAlbum[]> {

  constructor(private readonly artistService: ArtistService,
  ) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<IAlbum[]> {
    const artistId = route.params.id;

    if (!artistId)
      return of(null);

    return this.artistService.getAlbums(artistId);
  }

}

