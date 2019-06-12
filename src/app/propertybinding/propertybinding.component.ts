import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  template: `
  <input [id]="myID" type="text" value="Suppe">
  <input [disabled]="isDisabled" id="{{myID}}" type="text" value="Salat">
  <input bind-disabled="isDisabled" id="{{myID}}" type="text" value="Schnitzel">
  `,
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  public myID = "testID";
  public isDisabled = true;
  constructor() { }

  ngOnInit() {
  }

}
