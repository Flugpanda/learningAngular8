import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
  <p>EmployeeDetailComponent</p>
  <ul *ngFor="let employee of employees">
    <li> ID:{{ employee.id }} Name:{{ employee.name }} Age:{{employee.age}}
  </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmploees();
  }

}
