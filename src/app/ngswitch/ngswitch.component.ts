import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  template: `
    <div [ngSwitch]="essen">
      <p *ngSwitchCase="'suppe'">Suppe</p>
      <p *ngSwitchCase="'salat'">Salat</p>
      <p *ngSwitchCase="'schnitzel'">Schnitzel</p>
      <p *ngSwitchDefault>Haben Sie auch so einen Hunger?</p>
    </div>
  `,
  styles: []
})
export class NgswitchComponent implements OnInit {

  public essen = "Psychpowerpapagei";

  constructor() { }

  ngOnInit() {
  }

}
