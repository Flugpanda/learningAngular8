import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbindings',
  template: `
    <!-- with normal html class -->
    <p class="text-success">Ein echt toller text.</p>

    <!-- angular class binding -->
    <p [class]="successClass">Ein echt toller text.</p>

    <!-- class="text-special" will be handles as a dummy, beacuse of the class binding-->
    <p class="text-special" [class]="successClass">Ein echt toller text.</p>

    <!-- Conditional binding -->
    <p [class.text-danger]="hasError">Ein echt toller text.</p>

    <!-- binding with ngClass directive -->
    <p [ngClass]="messageClasses">Ein echt toller text.</p>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class ClassbindingsComponent implements OnInit {

  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  constructor() { }

  ngOnInit() {
  }

}
