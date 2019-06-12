import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template: `
    <!-- a simple click event listener to callback method klickMich -->
    <!-- $event is a special handler for angular, that tells you something about the event that was raised-->
    <button (click)="klickMich($event)">Klick mich</button>
    {{ greetings }}

    <br>

    <!-- inline event hanlding -->
    <button (click)="greetings='Moin moin!'">Moin moin</button>
  `,
  styles: []
})
export class EventbindingComponent implements OnInit {

  public greetings = "";

  private message = "Du hast mich wirklich geklicht!";

  constructor() { }

  ngOnInit() {
  }

  /**
   * Event handler for the cklicking of the button
   *
   * @param event the event
   */
  klickMich(event) {
    console.log(event);
    this.greetings = this.message;
  }
}
