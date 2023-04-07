import { Component, OnInit } from '@angular/core';

import { TaskDetails } from 'src/app/models/task-details.model';
import { GlobalService } from 'src/app/services/global.service';

import * as moment from 'moment';

let exampleDate = (moment(new Date())).format('MM-DD-YYYY');
let exampleStartTime = (moment(new Date()));
let exampleEndTime = (moment(new Date())).add(2, 'hours').add(15, 'minutes');
let startTimeStr = exampleStartTime.format('HH:mm:ss');
let endTimeStr = exampleEndTime.format('HH:mm:ss');
let durationStr = exampleEndTime.diff(exampleStartTime, 'hours', true);

const TASKS: TaskDetails[] = [
  {
    taskId: '0001',
    taskName: 'Working on the Activity Timer Front End App',
    date: exampleDate,
    startTime: startTimeStr,
    endTime: endTimeStr,
    duration: durationStr
  },
  {
    taskId: '0002',
    taskName: 'Working on the Activity Timer Back End App',
    date: exampleDate,
    startTime: startTimeStr,
    endTime: endTimeStr,
    duration: durationStr
  },
  {
    taskId: '0003',
    taskName: 'Working on the Activity Timer Database App',
    date: exampleDate,
    startTime: startTimeStr,
    endTime: endTimeStr,
    duration: durationStr
  },
];

@Component({
  selector: 'app-activity-timer',
  templateUrl: './activity-timer.component.html',
  styleUrls: ['./activity-timer.component.scss']
})
export class ActivityTimerComponent implements OnInit {

  constructor(private globals: GlobalService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.updateIsLoading(false);
    }, 2000);
  }

  updateIsLoading(value: boolean): void {
    console.log('Here!!!');
    this.globals.setIsLoading(value);
    console.log('Here!!!');
  }

  test(task: TaskDetails) {
    console.log(task);
  }

  startTime(ev: TaskDetails) {
    console.log(ev);
  }

  stopTime(ev: TaskDetails) {
    console.log(ev);
  }

  tasks = TASKS;
}
