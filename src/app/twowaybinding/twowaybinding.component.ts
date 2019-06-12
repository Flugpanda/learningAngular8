import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  template: `
    <input [(ngModel)]="syncText" type="text">
    {{ syncText }}
  `,
  styles: []
})
export class TwowaybindingComponent implements OnInit {

  public syncText = "";

  constructor() { }

  ngOnInit() {
  }

}
