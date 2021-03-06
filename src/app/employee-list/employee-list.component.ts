import { Component, OnInit } from '@angular/core';
import { EmployeeHTTPService } from '../employee-http.service';
import { error } from 'util';

@Component({
  selector: 'app-employee-list',
  template: `
  <p>EmployeeListComponent</p>
  <p>{{ errorMessage }}</p>
  <ul *ngFor="let employee of employees">
    <li> ID:{{ employee.id }} Name:{{ employee.name }} Age:{{employee.age}}
  </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errorMessage;

  constructor(private _httpService: EmployeeHTTPService) { }

  ngOnInit() {
    /**
     * Execute the hhtp call from the service
     * and subscribte to the observable of this method
     *
     * The employee data arrives asynchonisly.
     * We assign that data to the class propperty using => "Fat Arrow Syntax"
     */
    this._httpService.getEmployees()
        .subscribe(data => this.employees = data,
                   error => this.errorMessage = error);
  }

}
