import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componentinteraction-child',
  template: `
    <p>Child</p>
    <p>Hello [{{ name }}]</p>
    <button (click)="fireChildEvent()">Send Event</button>
  `,
  styles: []
})
export class ComponentinteractionChildComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireChildEvent() {
    console.log('Child event was sent.')
    this.childEvent.emit("Hello from Child.");
  }
}
