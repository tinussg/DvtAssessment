import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ArtistService } from '../root-services/artist.service';
import { IArtist } from '../shared/types';
import { map, startWith } from 'rxjs/operators';
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

  constructor(
    private readonly artistService: ArtistService,
    ) { }

  ngOnInit(): void {
    this.filteredArtists = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): IArtist[] {
    const filterValue = value.toLowerCase();

    return this.artists?.filter(arists => arists.name.toLowerCase().includes(filterValue));
  }
}

