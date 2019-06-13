import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentinteraction-parent',
  template: `
    <div>
      <p>Parent</p>
      <p>Sending --[{{ name }}]--> to Child</p>
      {{ message }}
      <!-- pass data to the child [parentData]="name" -->
      <!-- directly assning the value of the event to a property-->
      <!-- <app-componentinteraction-child (childEvent)="message=$event" [parentData]="name"></app-componentinteraction-child> -->

      <!-- handle the event of the child with a custom event handler -->
      <app-componentinteraction-child (childEvent)="receivechildEvent($event)" [parentData]="name"></app-componentinteraction-child>
    </div>
  `,
  styles: []
})
export class ComponentinteractionParentComponent implements OnInit {

  public name = "Bernd das Brot";
  public message = "";

  constructor() { }

  ngOnInit() {
  }

  /**
   *
   * @param notification
   */
  receivechildEvent(notification) {
    console.log('Child event received.');
    this.message = notification;
  }

}
