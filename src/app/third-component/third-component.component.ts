import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-third-component]',
  template: `<p>
              third-component works!
            </p>`,
  styleUrls: ['./third-component.component.css']
})
export class ThirdComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
