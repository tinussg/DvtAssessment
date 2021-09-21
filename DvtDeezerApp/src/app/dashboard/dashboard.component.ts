import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ArtistService } from '../root-services/artist.service';
import { IArtist, IResponse } from '../shared/types';
import { map, startWith } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { isNonNull } from '../shared/utils';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public searchControl = new FormControl();
  public artists: Observable<IArtist[]>;
  public artist: IArtist;
  public filteredArtists: any;
  public searchQuery: string;
  public get mockEnabled(): boolean {
    return environment.enableMock;
  }

  constructor(
    private readonly artistService: ArtistService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.searchArtist(environment.defaultSearch);
  }


  searchArtist(query: string = null): void {
    if (!this.mockEnabled || (this.searchQuery !== '' && isNonNull(this.searchQuery))) {
      this.searchQuery ? this.searchQuery : query;
      console.log("DashboardComponent ~ searchArtist ~ this.searchQuery", this.searchQuery);

      this.artists = this.artistService
      .searchArtist(this.searchQuery)
      .pipe(map(a => a.data))
    }
  }

  search() {
    this.searchArtist();
  }

  viewDetails(artist: IArtist): void {
    this.artistService.setArtist(artist);
    this.router.navigate(['/details', artist.id]);
  }
}

