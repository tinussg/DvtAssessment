import { Component, OnInit } from '@angular/core';
import { LoaderService } from './shared/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DvtDeezerApp';
  public isLoading: boolean = false;

  constructor(
    public loader: LoaderService,
  ) {}

  ngOnInit() {
    this.loader.loaderState.subscribe(r => this.isLoading = r.show);
  }
}
