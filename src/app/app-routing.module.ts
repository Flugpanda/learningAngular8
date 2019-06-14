import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

/**
 * Here we define all possible routs for the application.
 * Every route is a json object that contains:
 *    - path: a path that is refelctes in the url
 *    - component: the component that will be rendered when naviaging to this path
 */
const routes: Routes = [
  // this will serve as the default rout of the app root route
  // /
  { path: '',             component: FirstComponentComponent},

  // /departments
  { path: 'departments',  component: DepartmentListComponent },

  // /departments/{id}
  // this route will contain an id as an identifier for the component in REST like fastion
  { path: 'departments/:id',  component: DepartmentDetailComponent },

  // /employees
  { path: 'employees',    component: EmployeeListComponent },

  // this will automatically redirect a given path to another
  { path: 'employeeList', redirectTo: '/employees', pathMatch: 'full'},

  // Wildcard route that matches all urls except of those that are defined aboute.
  // Theirfore ist has to be always the last route in the configuration!
  { path: '**',           component: PageNotFoundComponent}
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
  EmployeeListComponent,
  PageNotFoundComponent,
  FirstComponentComponent,
  DepartmentDetailComponent
]
