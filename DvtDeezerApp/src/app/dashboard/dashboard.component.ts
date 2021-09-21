import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ArtistService } from '../root-services/artist.service';
import { IArtist } from '../shared/types';
import { map, startWith } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { isNonNull } from '../shared/utils';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public searchControl = new FormControl();
  public artists: IArtist[] = [];
  public artist: IArtist;
  public filteredArtists: any;

  public get mockEnabled(): boolean {
    return environment.enableMock;
  }

  constructor(
    private readonly artistService: ArtistService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.filteredArtists = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): IArtist[] {
    const filterValue = value.toLowerCase();
    this.searchArtist(value);
    return this.artists?.filter(arists => arists.name.toLowerCase().includes(filterValue));
  }

  searchArtist(searchQuery: string = null): void {
    if (this.mockEnabled || (searchQuery !== '' && isNonNull(searchQuery))) {
      this.artistService.searchArtist(searchQuery)
      .subscribe(a => this.artists = a);
    }
  }

  viewDetails(artist: IArtist): void {
    this.router.navigate(['/details', artist.id]);
  }
}

