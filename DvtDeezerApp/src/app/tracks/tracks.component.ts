import { Component, Input, OnInit } from '@angular/core';
import { IArtistTopTracks } from '../shared/types';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {

  @Input() public tracks: IArtistTopTracks[];

  constructor() { }

  ngOnInit(): void {
  }

}
