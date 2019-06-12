import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  template: `
    <!-- let will iterator over the list-->
    <ul *ngFor="let boy of southpark; index as i">
      <li>{{ i }} {{ boy }}
    </ul>

    <!-- instead of index you can use some ohter paraters -->
    <!-- first as f -->
    <!-- last as l -->
    <!-- odd as o -->
    <!-- even as e -->
  `,
  styles: []
})
export class NgforComponent implements OnInit {

  public southpark = ["Stan", "Kyle", "Eric", "Kenny"];

  constructor() { }

  ngOnInit() {
  }

}
