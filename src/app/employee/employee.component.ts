import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  template: `
    <p>EmployeeComponent</p>
    <ul *ngFor="let employee of employees">
      <li> {{ employee.name }}
    </ul>
  `,
  styles: []
})
export class EmployeeComponent implements OnInit {

  public employees = [];

  //                  _<Bezeichner>:    Typ
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmploees();
  }

}


