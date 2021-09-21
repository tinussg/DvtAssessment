import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ILoaderState } from './types';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject = new Subject<ILoaderState>();
  public loaderState = this.loaderSubject.asObservable();
  constructor() { }

  show(): void {
    setTimeout(() => {
      this.loaderSubject.next({ show: true } as ILoaderState);
    });

  }

  hide(): void {
    setTimeout(() => {
      this.loaderSubject.next({ show: false }  as ILoaderState);
    });

  }
}
