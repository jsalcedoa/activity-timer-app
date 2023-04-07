import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: 1,
      name: 'Home',
      icon: 'fa-solid fa-house'
    },
    {
      number: 2,
      name: 'Test 1',
      icon: 'fa-solid fa-chart-line'
    },
    {
      number: 3,
      name: 'Test 2',
      icon: 'fa-solid fa-gear'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
