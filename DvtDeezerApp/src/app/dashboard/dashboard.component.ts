import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IArtist } from '../shared/types';

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

  constructor() { }

  ngOnInit(): void {
  }

}
