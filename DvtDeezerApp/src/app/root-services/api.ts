import { serverUrl } from "../shared/utils";

export class ArtistApi {

  public static get artists(): string { return serverUrl('artists'); }

  public static artistSearch = (searchString: string) => serverUrl('search',`artist?q=${searchString}`);

}
