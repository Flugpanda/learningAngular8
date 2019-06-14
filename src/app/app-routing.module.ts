import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

/**
 * Here we define all possible routs for the application.
 * Every route is a json object that contains:
 *    - path: a path that is refelctes in the url
 *    - component: the component that will be rendered when naviaging to this path
 */
const routes: Routes = [
  // /departments
  { path: 'departments',  component: DepartmentListComponent },
  // /employees
  { path: 'employees',    component: EmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/**
 * This constant will help to avoid doble import the components in
 * app.routing.module.ts and app.module.ts
 *
 * The components necessary components will be importet here and
 * the constant with all its components will be known in the app.module.
 *
 * So everytime a new rout is added or removed, the change will be automatically
 * registered in the app.module.
 */
export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent
]
