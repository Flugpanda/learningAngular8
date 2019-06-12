import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  template: `
  <p [style.color]="'orange'">Stylielight</p>

  <p [style.color]="highlightColor">Stylielight</p>

  <!-- multiple styles with ngstyle -->
  <p [ngStyle]="myStyle">Stylielight</p>

  <!-- Styling with an expression -->
  <p [style.color]="hasError ? 'red' : 'green'">Stylielight</p>

  `,
  styles: []
})
export class StylebindingComponent implements OnInit {

  public hasError = false;
  public highlightColor = "orange";

  public myStyle = {
    color: "blue",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit() {
  }

}
