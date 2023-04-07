import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'activity-timer-app';

  sideNavStatus: boolean = false;

  isLoading: boolean = true;

  constructor(private globals: GlobalService) {
    this.isLoading = this.globals.getIsLoading();
  }

  updateIsLoading(value: boolean): void {
    this.globals.setIsLoading(value);
    this.isLoading = value;
    console.log('==>', this.isLoading);
  }

  // I need to be able to have the subject here in order to be able to listen to when other component calls the service and changes the state.

}
