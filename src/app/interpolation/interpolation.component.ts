import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public surName = "Hans";
  public lastName = "Heiner";
  public location = window.location.href;

  private numer = 42;

  constructor() { }

  ngOnInit() {
  }

  public getNumer() {
    return this.numer;
  }
}
