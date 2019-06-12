import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  template: `
    <button (click)="toggle()">Toggle</button>
    {{ condition }}

    <!-- this element will be rendered, if the condition is true-->
    <p *ngIf="condition">
      Hier könnte ihre Text stehen.
    </p>

    <!-- Using a condition and attatich an if this then else structure to it -->
    <div *ngIf="condition; then thenBlock; else elseBlock;">
    </div>

    <!-- this block is a placeholder for an element that shall be rendered if the condition is true -->
    <ng-template #thenBlock>
      <p>
        Woodsy Owl will das du die Umwelt sauber hälltst!!!
      </p>
    </ng-template>

    <!-- this block is a placeholder for an element that shall be rendered if the condition is false -->
    <ng-template #elseBlock>
      <p>
        Es gibt nichts zu sehen, bitte gehen Sie weiter!
      </p>
    </ng-template>
  `,
  styles: []
})
export class NgifComponent implements OnInit {

  public condition = false;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.condition = !this.condition;
  }

}
