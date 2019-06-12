import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  template: `
  <input #myInput type="text">
  <br>
  <!-- pass the input to the handler-->
  <button (click)="logMessage(myInput.value)">Log Message</button>
  <!-- pass the element itself to the handler-->
  <button (click)="logElement(myInput)">Log Element</button>
  {{ message }}
  `,
  styles: []
})
export class DatabindingComponent implements OnInit {

  public message = ""

  constructor() { }

  ngOnInit() {
  }
  /**
   * Event handler for the Log Message Button
   * @param value the value from the input field
   */
  logMessage(value) {
    this.message = value;
  }

  /**
   * Event handler for the Log Element Button
   * @param element the input als DOM element
   */
  logElement(element) {
    console.log(element);
    // access the normal DOM properties
    this.message = element.value;
  }

}
