export interface IArtist {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: number;
  nb_fan: number;
  radio: boolean;
  tracklist: string;
  type: string;
}

export interface IArtistTopTracks {
  id: number;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  md5_image: string;
  artist: Partial<IArtist>;
  album: Partial<IAlbum>;
  type: string;
}

export interface IAlbum {
  id?: number;
  title?: string;
  link?: string;
  cover?: string;
  cover_small?: string;
  cover_medium?: string;
  cover_big?: string;
  cover_xl?: string;
  md5_image?: string;
  genre_id?: number;
  fans?: number;
  release_date?: string;
  record_type?: string;
  tracklist?: string;
  explicit_lyrics?: boolean;
  type?: string;
}

export interface IResponse<Type> {
  data: any[];
  total: number;
  next: string;
}

export interface ILoaderState {
  show: boolean;
}
