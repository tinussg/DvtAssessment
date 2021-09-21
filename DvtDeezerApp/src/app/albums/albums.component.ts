import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from '../shared/types';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  @Input() public albums: IAlbum[];

  constructor() { }

  ngOnInit(): void {
  }

}
