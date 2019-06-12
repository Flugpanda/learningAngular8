import { Component, OnInit } from '@angular/core';

/**
 * To make [(ngModel)] working you need to add FormsModule to the app.module.ts file.
 *
 * import { FormsModule } from '@angular/forms';    <-- import the module
 *
 * @NgModule({
  declarations: [
    AppComponent,
    ...
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule            <-- add the module to the app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
 */

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
