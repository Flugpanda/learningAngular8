import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeList = [
    {"id": 1, "name": "Stan", "age": 10},
    {"id": 2, "name": "Kyle", "age": 10},
    {"id": 3, "name": "Eric", "age": 10},
    {"id": 4, "name": "Kenny", "age": 10},
    {"id": 5, "name": "Mr. Garrison", "age": 41},
    {"id": 6, "name": "Mr. Mackey", "age": 48},
    {"id": 7, "name": "Chefkoch", "age": 38}
  ]

  constructor() { }

  getEmploees() {
    return this.employeeList;
  }
}
