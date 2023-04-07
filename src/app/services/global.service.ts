import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  private isLoading: boolean = true;
  isLoadingChanged$: Subject<boolean> = new Subject<boolean>();

  setIsLoading(value: boolean): void {
    console.log('isLoading', this.isLoading);
    this.isLoading = value;
    console.log('isLoading', this.isLoading);
    this.isLoadingChanged$.next(this.isLoading);
  }

  getIsLoading(): boolean {
    return this.isLoading;
  }

}
