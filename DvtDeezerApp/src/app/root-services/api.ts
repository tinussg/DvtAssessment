import { serverUrl } from '../shared/utils';

export class ArtistApi {

  public static get artists(): string { return serverUrl('artists'); }

  public static artistSearch = (searchString: string) => serverUrl('search', 'artist');

  public static artistTopTracks = (id: number) => serverUrl('artist',id,'top');

  public static artist = (id: number) => serverUrl('artist', id);

  public static albums = (id: number) => serverUrl('artist', id, 'albums');
}
